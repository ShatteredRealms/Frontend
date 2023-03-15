// package: sro
// file: sro/globals.proto

import * as jspb from "google-protobuf";

export class UserTarget extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  hasUsername(): boolean;
  clearUsername(): void;
  getUsername(): string;
  setUsername(value: string): void;

  getTargetCase(): UserTarget.TargetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserTarget.AsObject;
  static toObject(includeInstance: boolean, msg: UserTarget): UserTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserTarget;
  static deserializeBinaryFromReader(message: UserTarget, reader: jspb.BinaryReader): UserTarget;
}

export namespace UserTarget {
  export type AsObject = {
    id: string,
    username: string,
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    ID = 1,
    USERNAME = 2,
  }
}

