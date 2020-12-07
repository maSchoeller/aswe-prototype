// package: MachineNodes
// file: LightControlService.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as LightControlService_pb from "./LightControlService_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ILightControlServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getLightUpdates: ILightControlServiceService_IGetLightUpdates;
}

interface ILightControlServiceService_IGetLightUpdates extends grpc.MethodDefinition<LightControlService_pb.ConnectionParameters, LightControlService_pb.LightColor> {
    path: "/MachineNodes.LightControlService/GetLightUpdates";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<LightControlService_pb.ConnectionParameters>;
    requestDeserialize: grpc.deserialize<LightControlService_pb.ConnectionParameters>;
    responseSerialize: grpc.serialize<LightControlService_pb.LightColor>;
    responseDeserialize: grpc.deserialize<LightControlService_pb.LightColor>;
}

export const LightControlServiceService: ILightControlServiceService;

export interface ILightControlServiceServer {
    getLightUpdates: grpc.handleServerStreamingCall<LightControlService_pb.ConnectionParameters, LightControlService_pb.LightColor>;
}

export interface ILightControlServiceClient {
    getLightUpdates(request: LightControlService_pb.ConnectionParameters, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<LightControlService_pb.LightColor>;
    getLightUpdates(request: LightControlService_pb.ConnectionParameters, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<LightControlService_pb.LightColor>;
}

export class LightControlServiceClient extends grpc.Client implements ILightControlServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getLightUpdates(request: LightControlService_pb.ConnectionParameters, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<LightControlService_pb.LightColor>;
    public getLightUpdates(request: LightControlService_pb.ConnectionParameters, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<LightControlService_pb.LightColor>;
}
