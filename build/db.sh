#!/bin/bash
VERSION=1.0.1
URL=ghcr.io/arinji2/blue-bucks-db
echo "Building and Pushing Docker Image for Blue-Bucks DB"

docker build -t $URL:$VERSION ../db
docker push $URL:$VERSION

docker tag $URL:$VERSION $URL:latest
docker push $URL:latest

docker image prune -f
