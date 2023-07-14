// package: sro.gamebackend
// file: sro/gamebackend/connection.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as sro_character_character_pb from "../../sro/character/character_pb";
import * as sro_globals_pb from "../../sro/globals_pb";

export class ConnectGameServerResponse extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getPort(): number;
  setPort(value: number): void;

  getConnectionId(): string;
  setConnectionId(value: string): void;

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
    connectionId: string,
  }
}

export class VerifyConnectRequest extends jspb.Message {
  getConnectionId(): string;
  setConnectionId(value: string): void;

  getServerName(): string;
  setServerName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyConnectRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyConnectRequest): VerifyConnectRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerifyConnectRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyConnectRequest;
  static deserializeBinaryFromReader(message: VerifyConnectRequest, reader: jspb.BinaryReader): VerifyConnectRequest;
}

export namespace VerifyConnectRequest {
  export type AsObject = {
    connectionId: string,
    serverName: string,
  }
}

export class ConnectionStatus extends jspb.Message {
  getOnline(): boolean;
  setOnline(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionStatus): ConnectionStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectionStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionStatus;
  static deserializeBinaryFromReader(message: ConnectionStatus, reader: jspb.BinaryReader): ConnectionStatus;
}

export namespace ConnectionStatus {
  export type AsObject = {
    online: boolean,
  }
}

export class TransferPlayerRequest extends jspb.Message {
  getCharacter(): string;
  setCharacter(value: string): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): sro_globals_pb.Location | undefined;
  setLocation(value?: sro_globals_pb.Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransferPlayerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransferPlayerRequest): TransferPlayerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransferPlayerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransferPlayerRequest;
  static deserializeBinaryFromReader(message: TransferPlayerRequest, reader: jspb.BinaryReader): TransferPlayerRequest;
}

export namespace TransferPlayerRequest {
  export type AsObject = {
    character: string,
    location?: sro_globals_pb.Location.AsObject,
  }
}

