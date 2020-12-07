// package: MachineNodes
// file: LightControlService.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class LightColor extends jspb.Message { 
    getRed(): number;
    setRed(value: number): LightColor;

    getGreen(): number;
    setGreen(value: number): LightColor;

    getBlue(): number;
    setBlue(value: number): LightColor;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LightColor.AsObject;
    static toObject(includeInstance: boolean, msg: LightColor): LightColor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LightColor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LightColor;
    static deserializeBinaryFromReader(message: LightColor, reader: jspb.BinaryReader): LightColor;
}

export namespace LightColor {
    export type AsObject = {
        red: number,
        green: number,
        blue: number,
    }
}

export class ConnectionParameters extends jspb.Message { 
    getClientname(): string;
    setClientname(value: string): ConnectionParameters;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectionParameters.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectionParameters): ConnectionParameters.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectionParameters, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectionParameters;
    static deserializeBinaryFromReader(message: ConnectionParameters, reader: jspb.BinaryReader): ConnectionParameters;
}

export namespace ConnectionParameters {
    export type AsObject = {
        clientname: string,
    }
}

export class ConnectionResponse extends jspb.Message { 
    getAccepted(): boolean;
    setAccepted(value: boolean): ConnectionResponse;

    getMessage(): string;
    setMessage(value: string): ConnectionResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConnectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ConnectionResponse): ConnectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConnectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConnectionResponse;
    static deserializeBinaryFromReader(message: ConnectionResponse, reader: jspb.BinaryReader): ConnectionResponse;
}

export namespace ConnectionResponse {
    export type AsObject = {
        accepted: boolean,
        message: string,
    }
}
