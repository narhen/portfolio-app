#!/bin/bash

npm run build

version=$(git rev-parse --short HEAD)
docker build -t portfolio-app:$version .

filename=portfolio-app_$version
docker save -o $filename portfolio-app:$version
echo "saved docker image to: $filename"

