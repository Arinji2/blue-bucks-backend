#!/bin/bash
#Use this as a last measure
docker run --name pocketbase \
  -d \
  -p 8090:8090 \
  -v ./pb_data:/pb/pb_data \
  -v ./pb_hooks:/pb/pb_hooks \
  -v ./pb_migrations:/pb/pb_migrations \
  ghcr.io/blue-bucks/pocketbase:latest
