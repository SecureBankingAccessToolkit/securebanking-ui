name := securebanking-ui
service := rcs
repo := europe-west4-docker.pkg.dev/sbat-gcr-develop/sapig-docker-artifact
tag  := latest
helm_repo := forgerock-helm/secure-api-gateway/securebanking-ui/
shouldBePushed = true

update_cli:
	cd secure-api-gateway-ob-uk-ui-cli
	npm version patch --no-git-tag-version

update_common:
	cd secure-api-gateway-ob-uk-ui-cli
	npm version patch --no-git-tag-version

update_rcs:
	cd secure-api-gateway-ob-uk-ui-rcs
	npm version patch --no-git-tag-version

update_versions:
	npm version patch

# docker target
docker:
# info section
ifeq ($(shouldBePushed), true)
	$(info The service=${service} image WILL BE PUSHED to repository ${repo}/securebanking/ui/${service}:${tag})
else
	$(info The service=${service} image WILL NOT BE PUSHED to repository ${repo}/securebanking/ui/${service}:${tag})
endif
# build section
	cd secure-api-gateway-ob-uk-ui-${service} && \
	docker build -t ${repo}/securebanking/ui/${service}:${tag} -f projects/${service}/docker/Dockerfile .
# push section with condition (default true)
ifeq ($(shouldBePushed), true)
	docker push ${repo}/securebanking/ui/${service}:${tag}
endif

# Helm target
package_helm:
ifndef version
	$(error A version must be supplied, Eg. make helm version=1.0.0)
endif
	helm dependency update _infra/helm/${name}
	helm template _infra/helm/${name}
	helm package _infra/helm/${name} --version ${version} --app-version ${version}

publish_helm:
ifndef version
	$(error A version must be supplied, Eg. make helm version=1.0.0)
endif
	jf rt upload  ./*-${version}.tgz ${helm_repo}
