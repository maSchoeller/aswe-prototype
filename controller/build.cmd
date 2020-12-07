yarn run grpc_tools_node_protoc --js_out=import_style=commonjs,binary:proto --grpc_out=proto --plugin=protoc-gen-grpc=.\node_modules\.bin\grpc_tools_node_protoc_plugin.cmd  -I .. LightControlService.proto

yarn run grpc_tools_node_protoc --plugin=protoc-gen-ts=.\node_modules\.bin\protoc-gen-ts.cmd --ts_out=proto -I .. LightControlService.proto
