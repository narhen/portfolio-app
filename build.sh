#!/bin/bash

npm run build
docker build --build-arg -t portfolio-app:$(git rev-parse --short HEAD) .
