// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var LightControlService_pb = require('./LightControlService_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_MachineNodes_ConnectionParameters(arg) {
  if (!(arg instanceof LightControlService_pb.ConnectionParameters)) {
    throw new Error('Expected argument of type MachineNodes.ConnectionParameters');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MachineNodes_ConnectionParameters(buffer_arg) {
  return LightControlService_pb.ConnectionParameters.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MachineNodes_ConnectionResponse(arg) {
  if (!(arg instanceof LightControlService_pb.ConnectionResponse)) {
    throw new Error('Expected argument of type MachineNodes.ConnectionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MachineNodes_ConnectionResponse(buffer_arg) {
  return LightControlService_pb.ConnectionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MachineNodes_LightColor(arg) {
  if (!(arg instanceof LightControlService_pb.LightColor)) {
    throw new Error('Expected argument of type MachineNodes.LightColor');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MachineNodes_LightColor(buffer_arg) {
  return LightControlService_pb.LightColor.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var LightControlServiceService = exports.LightControlServiceService = {
  connect: {
    path: '/MachineNodes.LightControlService/Connect',
    requestStream: false,
    responseStream: false,
    requestType: LightControlService_pb.ConnectionParameters,
    responseType: LightControlService_pb.ConnectionResponse,
    requestSerialize: serialize_MachineNodes_ConnectionParameters,
    requestDeserialize: deserialize_MachineNodes_ConnectionParameters,
    responseSerialize: serialize_MachineNodes_ConnectionResponse,
    responseDeserialize: deserialize_MachineNodes_ConnectionResponse,
  },
  getLightUpdates: {
    path: '/MachineNodes.LightControlService/GetLightUpdates',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: LightControlService_pb.LightColor,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_MachineNodes_LightColor,
    responseDeserialize: deserialize_MachineNodes_LightColor,
  },
};

exports.LightControlServiceClient = grpc.makeGenericClientConstructor(LightControlServiceService);
