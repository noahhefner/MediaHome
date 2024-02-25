REPO ?= nhefner/media-home
GITSHA = $(shell git rev-parse --short HEAD)
TAG_COMMIT = $(REPO):$(GITSHA)
TAG_LATEST=$(REPO):latest

all:dev

.PHONY:dev
dev:
	npm run dev

.PHONY:build
build:
	docker build --no-cache -t $(TAG_LATEST) .

.PHONY:run
run:
	docker run --rm -p 8081:8080 $(TAG_LATEST)

.PHONY:clean
clean:
	@rm -rf dist
	@echo "Deleting Docker images with tag $(TAG_LATEST)"
	@docker images -q $(TAG_LATEST) | xargs -r docker rmi -f

.PHONY:publish
publish:
	docker push $(TAG_LATEST)
	@docker tag $(TAG_LATEST) $(TAG_COMMIT)
	docker push $(TAG_COMMIT)