// package: MachineNodes
// file: LightControlService.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as LightControlService_pb from "./LightControlService_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ILightControlServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    connect: ILightControlServiceService_IConnect;
    getLightUpdates: ILightControlServiceService_IGetLightUpdates;
}

interface ILightControlServiceService_IConnect extends grpc.MethodDefinition<LightControlService_pb.ConnectionParameters, LightControlService_pb.ConnectionResponse> {
    path: "/MachineNodes.LightControlService/Connect";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<LightControlService_pb.ConnectionParameters>;
    requestDeserialize: grpc.deserialize<LightControlService_pb.ConnectionParameters>;
    responseSerialize: grpc.serialize<LightControlService_pb.ConnectionResponse>;
    responseDeserialize: grpc.deserialize<LightControlService_pb.ConnectionResponse>;
}
interface ILightControlServiceService_IGetLightUpdates extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, LightControlService_pb.LightColor> {
    path: "/MachineNodes.LightControlService/GetLightUpdates";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<LightControlService_pb.LightColor>;
    responseDeserialize: grpc.deserialize<LightControlService_pb.LightColor>;
}

export const LightControlServiceService: ILightControlServiceService;

export interface ILightControlServiceServer {
    connect: grpc.handleUnaryCall<LightControlService_pb.ConnectionParameters, LightControlService_pb.ConnectionResponse>;
    getLightUpdates: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, LightControlService_pb.LightColor>;
}

export interface ILightControlServiceClient {
    connect(request: LightControlService_pb.ConnectionParameters, callback: (error: grpc.ServiceError | null, response: LightControlService_pb.ConnectionResponse) => void): grpc.ClientUnaryCall;
    connect(request: LightControlService_pb.ConnectionParameters, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: LightControlService_pb.ConnectionResponse) => void): grpc.ClientUnaryCall;
    connect(request: LightControlService_pb.ConnectionParameters, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: LightControlService_pb.ConnectionResponse) => void): grpc.ClientUnaryCall;
    getLightUpdates(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<LightControlService_pb.LightColor>;
    getLightUpdates(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<LightControlService_pb.LightColor>;
}

export class LightControlServiceClient extends grpc.Client implements ILightControlServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public connect(request: LightControlService_pb.ConnectionParameters, callback: (error: grpc.ServiceError | null, response: LightControlService_pb.ConnectionResponse) => void): grpc.ClientUnaryCall;
    public connect(request: LightControlService_pb.ConnectionParameters, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: LightControlService_pb.ConnectionResponse) => void): grpc.ClientUnaryCall;
    public connect(request: LightControlService_pb.ConnectionParameters, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: LightControlService_pb.ConnectionResponse) => void): grpc.ClientUnaryCall;
    public getLightUpdates(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<LightControlService_pb.LightColor>;
    public getLightUpdates(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<LightControlService_pb.LightColor>;
}
