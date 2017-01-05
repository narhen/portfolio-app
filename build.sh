#!/bin/bash

npm run build
docker build -t portfolio-app:$(git rev-parse --short HEAD) .
