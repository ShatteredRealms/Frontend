// package: sro.gamebackend
// file: connection.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "./google/api/annotations_pb";

export class ConnectGameServerRequest extends jspb.Message {
  getCharacterId(): number;
  setCharacterId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectGameServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectGameServerRequest): ConnectGameServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectGameServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectGameServerRequest;
  static deserializeBinaryFromReader(message: ConnectGameServerRequest, reader: jspb.BinaryReader): ConnectGameServerRequest;
}

export namespace ConnectGameServerRequest {
  export type AsObject = {
    characterId: number,
  }
}

export class ConnectGameServerResponse extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectGameServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectGameServerResponse): ConnectGameServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectGameServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectGameServerResponse;
  static deserializeBinaryFromReader(message: ConnectGameServerResponse, reader: jspb.BinaryReader): ConnectGameServerResponse;
}

export namespace ConnectGameServerResponse {
  export type AsObject = {
    address: string,
    port: number,
  }
}

