name := securebanking-ui
dev-repo := sbat-gcr-develop

helm:
ifndef version
	$(error A version must be supplied, Eg. make helm version=1.0.0)
endif
	helm dep up _infra/helm/${name}
	helm template _infra/helm/${name}
	helm package _infra/helm/${name}
	mv ./${name}-*.tgz ./${name}-${version}.tgz

docker:
ifndef service
	$(error A service must be supplied, one of auth, swagger or rcs, Eg. make docker service=auth)
endif
ifndef tag
	$(warning No tag supplied, latest assumed. supply tag with make docker tag=x.x.x service=...)
	$(eval tag=latest)
endif
	cd securebanking-${service}-ui && \
	docker build -t eu.gcr.io/${dev-repo}/securebanking-ui/${service}:${tag} -f projects/${service}/docker/Dockerfile .