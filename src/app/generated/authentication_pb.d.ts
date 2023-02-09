// package: sro.accounts
// file: authentication.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "./google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as authorization_pb from "./authorization_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class LoginMessage extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginMessage.AsObject;
  static toObject(includeInstance: boolean, msg: LoginMessage): LoginMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginMessage;
  static deserializeBinaryFromReader(message: LoginMessage, reader: jspb.BinaryReader): LoginMessage;
}

export namespace LoginMessage {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  getId(): number;
  setId(value: number): void;

  getEmail(): string;
  setEmail(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getCreatedAt(): string;
  setCreatedAt(value: string): void;

  clearRolesList(): void;
  getRolesList(): Array<authorization_pb.UserRole>;
  setRolesList(value: Array<authorization_pb.UserRole>): void;
  addRoles(value?: authorization_pb.UserRole, index?: number): authorization_pb.UserRole;

  hasBannedat(): boolean;
  clearBannedat(): void;
  getBannedat(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBannedat(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    token: string,
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    username: string,
    createdAt: string,
    rolesList: Array<authorization_pb.UserRole.AsObject>,
    bannedat?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class RegisterAccountMessage extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterAccountMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterAccountMessage): RegisterAccountMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterAccountMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterAccountMessage;
  static deserializeBinaryFromReader(message: RegisterAccountMessage, reader: jspb.BinaryReader): RegisterAccountMessage;
}

export namespace RegisterAccountMessage {
  export type AsObject = {
    email: string,
    password: string,
    username: string,
    firstName: string,
    lastName: string,
  }
}

export class ForgotUsernameMessage extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgotUsernameMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ForgotUsernameMessage): ForgotUsernameMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForgotUsernameMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgotUsernameMessage;
  static deserializeBinaryFromReader(message: ForgotUsernameMessage, reader: jspb.BinaryReader): ForgotUsernameMessage;
}

export namespace ForgotUsernameMessage {
  export type AsObject = {
    email: string,
  }
}

export class ForgotPasswordMessage extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgotPasswordMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ForgotPasswordMessage): ForgotPasswordMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ForgotPasswordMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgotPasswordMessage;
  static deserializeBinaryFromReader(message: ForgotPasswordMessage, reader: jspb.BinaryReader): ForgotPasswordMessage;
}

export namespace ForgotPasswordMessage {
  export type AsObject = {
    username: string,
  }
}

export class RestPasswordMessage extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestPasswordMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RestPasswordMessage): RestPasswordMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestPasswordMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestPasswordMessage;
  static deserializeBinaryFromReader(message: RestPasswordMessage, reader: jspb.BinaryReader): RestPasswordMessage;
}

export namespace RestPasswordMessage {
  export type AsObject = {
    username: string,
    password: string,
    token: string,
  }
}

export class AuthToken extends jspb.Message {
  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthToken.AsObject;
  static toObject(includeInstance: boolean, msg: AuthToken): AuthToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthToken;
  static deserializeBinaryFromReader(message: AuthToken, reader: jspb.BinaryReader): AuthToken;
}

export namespace AuthToken {
  export type AsObject = {
    token: string,
  }
}

