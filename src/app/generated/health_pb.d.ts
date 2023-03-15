// package: sro
// file: health.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "./google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class HealthMessage extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthMessage.AsObject;
  static toObject(includeInstance: boolean, msg: HealthMessage): HealthMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HealthMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthMessage;
  static deserializeBinaryFromReader(message: HealthMessage, reader: jspb.BinaryReader): HealthMessage;
}

export namespace HealthMessage {
  export type AsObject = {
    status: string,
  }
}

