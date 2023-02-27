name := securebanking-ui
gcr-repo := sbat-gcr-develop
shouldBePushed = true

# Helm target
helm:
ifndef version
	$(error A version must be supplied, Eg. make helm version=1.0.0)
endif
	helm dep up _infra/helm/${name}
	helm template _infra/helm/${name}
	helm package _infra/helm/${name}
	mv ./${name}-*.tgz ./${name}-${version}.tgz

# docker target
docker:
# Check service to build
ifndef service
	$(error No service supplied, rcs assumed, supply service with make docker service=rcs)
	$(eval service=rcs)
endif
ifndef tag
	$(warning No tag supplied, latest assumed. supply tag with make docker tag=x.x.x service=...)
	$(eval tag=latest)
endif
# info section
ifeq ($(shouldBePushed), true)
	$(info The service=${service} image WILL BE PUSHED to repository eu.gcr.io/${gcr-repo}/securebanking/ui/${service}:${tag})
else
	$(info The service=${service} image WILL NOT BE PUSHED to repository eu.gcr.io/${gcr-repo}/securebanking/ui/${service}:${tag})
endif
# build section
	cd secure-api-gateway-ob-uk-ui-${service} && \
	docker build -t eu.gcr.io/${gcr-repo}/securebanking/ui/${service}:${tag} -f projects/${service}/docker/Dockerfile .
# push section with condition (default true)
ifeq ($(shouldBePushed), true)
	docker push eu.gcr.io/${gcr-repo}/securebanking/ui/${service}:${tag}
endif
# Conditional release section
ifdef release-repo
	docker tag eu.gcr.io/${gcr-repo}/securebanking/ui/${service}:${tag} eu.gcr.io/${release-repo}/securebanking/ui/${service}:${tag}
ifeq ($(shouldBePushed), true)
	docker push eu.gcr.io/${release-repo}/securebanking/ui/${service}:${tag}
endif
endif

# test target
test:
ifndef service
	$(error No service supplied, rcs assumed, supply service with make docker service=rcs)
  $(eval service=rcs)
endif

	cd securebanking-${service}-ui && \
	npm ci
	npm run test

# version target (get the version from npm env var npm_package_version, match with the version from package.json)
version:
ifndef service
	$(error No service supplied, rcs assumed, supply service with make docker service=rcs)
  $(eval service=rcs)
endif

	cd securebanking-${service}-ui && \
	npm -s run env echo '$$npm_package_version'
