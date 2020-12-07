#!/bin/bash

# generate js codes via grpc-tools 
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:./proto \
    --grpc_out=./proto \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugins \
    -I ./proto \
    ../LightControlService.proto
 
# generate d.ts codes 
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=./proto \
    -I ./proto \
    ../LightControlService.proto