#!/bin/bash
VERSION=1.0.1
URL=ghcr.io/arinji2/blue-bucks-api
echo "Building and Pushing Docker Image for Blue-Bucks API"

docker build -t $URL:$VERSION ../api
docker push $URL:$VERSION

docker tag $URL:$VERSION $URL:latest
docker push $URL:latest

docker image prune -f
