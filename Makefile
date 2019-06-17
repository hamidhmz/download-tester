NAME   := download-test
TAG    := $$(git log -1 --pretty=%h)
IMG    := ${NAME}:${TAG}
LATEST := ${NAME}:latest

socket_build:
	docker build -t ${IMG} . && \
    docker tag ${IMG} ${LATEST}

_build:
	docker build -t download-test:latest -f Base.Dockerfile .
_up:
	docker-compose -p _build up -d 
