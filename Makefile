#   _____ _           _   _                    _ _____            _                ____        _ _
#  / ____| |         | | | |                  | |  __ \          | |              / __ \      | (_)
# | (___ | |__   __ _| |_| |_ ___ _ __ ___  __| | |__) |___  __ _| |_ __ ___  ___| |  | |_ __ | |_ _ __   ___
#  \___ \| '_ \ / _` | __| __/ _ \ '__/ _ \/ _` |  _  // _ \/ _` | | '_ ` _ \/ __| |  | | '_ \| | | '_ \ / _ \
#  ____) | | | | (_| | |_| ||  __/ | |  __/ (_| | | \ \  __/ (_| | | | | | | \__ \ |__| | | | | | | | | |  __/
# |_____/|_| |_|\__,_|\__|\__\___|_|__\___|\__,_|_|  \_\___|\__,_|_|_| |_| |_|___/\____/|_| |_|_|_|_| |_|\___|
#                               |  ____|             | |               | |
#                               | |__ _ __ ___  _ __ | |_ ___ _ __   __| |
#                               |  __| '__/ _ \| '_ \| __/ _ \ '_ \ / _` |
#                               | |  | | | (_) | | | | ||  __/ | | | (_| |
#                               |_|  |_|  \___/|_| |_|\__\___|_| |_|\__,_|


#
# Makefile for building, running, and testing the frontend
#

# Import dotenv file
ifneq (,$(wildcard ./.env))
	include .env
	export
endif

# __      __
# \ \    / /
#  \ \  / /_ _ _ __ ___
#   \ \/ / _` | '__/ __|
#    \  / (_| | |  \__ \
#     \/ \__,_|_|  |___/

# Base version
BASE_VERSION := $(shell git describe --tags --always --abbrev=0 --match='v[0-9]*.[0-9]*.[0-9]*' 2> /dev/null | sed 's/^.//')
COMMIT_HASH=$(shell git rev-parse --short HEAD)

# Current time for versioning
time := $(shell date +%s)

BUILD_DEV := dev
BUILD_QA := qa
BUILD_PROD := prod

ROOT_DIR = $(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
PROTO_DIR=$(shell realpath $(ROOT_DIR)/../go-backend/api)
PROTO_THIRD_PARTY_DIR=$(shell realpath $(ROOT_DIR)/../go-backend/third_party)
PROTO_FILES = $(shell find $(PROTO_DIR) $(PROTO_THIRD_PARTY_DIR) -type f -name '*.proto')
PROTO_GENERATED_DIR=$(ROOT_DIR)/src/app/generated


#  _______                   _
# |__   __|                 | |
#    | | __ _ _ __ __ _  ___| |_ ___
#    | |/ _` | '__/ _` |/ _ \ __/ __|
#    | | (_| | | | (_| |  __/ |_\__ \
#    |_|\__,_|_|  \__, |\___|\__|___/
#                  __/ |
#                 |___/

#
# Setup Targets
#

install:
	npm install

#
# Docker Targets
#

build:
	docker build -t sro-frontend -f Dockerfile .

pushf:
	docker tag sro-frontend $(REGISTRY)/frontend:latest
	docker tag sro-frontend $(REGISTRY)/frontend:$(BASE_VERSION)
	docker tag sro-frontend $(REGISTRY)/frontend:$(BASE_VERSION)-$(COMMIT_HASH)
	docker push $(REGISTRY)/frontend:latest
	docker push $(REGISTRY)/frontend:$(BASE_VERSION)
	docker push $(REGISTRY)/frontend:$(BASE_VERSION)-$(COMMIT_HASH)

push: build pushf

#
# Testing Targets
#

test:
	npm test -- --watchAll=false


#
# AWS Targets
#
aws-docker-login:
	aws ecr get-login-password | docker login --username AWS --password-stdin $(BASE_REGISTRY)

.PHONY: clean-protos protos $(PROTO_FILES)

clean-protos:
	rm -rf "$(PROTO_GENERATED_DIR)"
	mkdir "$(PROTO_GENERATED_DIR)"

protos: clean-protos $(PROTO_FILES)

# Note: Requires `ts-protoc-gen`. Can be installed with npm `npm install -g ts-protoc-gen`
$(PROTO_FILES):
	protoc "$@" \
		-I "$(PROTO_DIR)" \
		-I "$(PROTO_THIRD_PARTY_DIR)" \
		--js_out="import_style=commonjs:$(PROTO_GENERATED_DIR)" \
		--ts_out="service=grpc-web:$(PROTO_GENERATED_DIR)"
