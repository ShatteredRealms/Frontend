// package: sro.accounts
// file: user.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "./google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as authorization_pb from "./authorization_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class GetUserMessage extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserMessage.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserMessage): GetUserMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserMessage;
  static deserializeBinaryFromReader(message: GetUserMessage, reader: jspb.BinaryReader): GetUserMessage;
}

export namespace GetUserMessage {
  export type AsObject = {
    userId: number,
  }
}

export class UserMessage extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getEmail(): string;
  setEmail(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getCreatedat(): string;
  setCreatedat(value: string): void;

  clearRolesList(): void;
  getRolesList(): Array<authorization_pb.UserRole>;
  setRolesList(value: Array<authorization_pb.UserRole>): void;
  addRoles(value?: authorization_pb.UserRole, index?: number): authorization_pb.UserRole;

  hasBannedat(): boolean;
  clearBannedat(): void;
  getBannedat(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBannedat(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCurrentCharacterId(): boolean;
  clearCurrentCharacterId(): void;
  getCurrentCharacterId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setCurrentCharacterId(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserMessage.AsObject;
  static toObject(includeInstance: boolean, msg: UserMessage): UserMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserMessage;
  static deserializeBinaryFromReader(message: UserMessage, reader: jspb.BinaryReader): UserMessage;
}

export namespace UserMessage {
  export type AsObject = {
    id: number,
    email: string,
    username: string,
    createdat: string,
    rolesList: Array<authorization_pb.UserRole.AsObject>,
    bannedat?: google_protobuf_wrappers_pb.StringValue.AsObject,
    currentCharacterId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

export class GetUserResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getEmail(): string;
  setEmail(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getFirstName(): string;
  setFirstName(value: string): void;

  getLastName(): string;
  setLastName(value: string): void;

  getCreatedat(): string;
  setCreatedat(value: string): void;

  clearRolesList(): void;
  getRolesList(): Array<authorization_pb.UserRole>;
  setRolesList(value: Array<authorization_pb.UserRole>): void;
  addRoles(value?: authorization_pb.UserRole, index?: number): authorization_pb.UserRole;

  clearPermissionsList(): void;
  getPermissionsList(): Array<authorization_pb.UserPermission>;
  setPermissionsList(value: Array<authorization_pb.UserPermission>): void;
  addPermissions(value?: authorization_pb.UserPermission, index?: number): authorization_pb.UserPermission;

  hasBannedat(): boolean;
  clearBannedat(): void;
  getBannedat(): google_protobuf_wrappers_pb.StringValue | undefined;
  setBannedat(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasCurrentCharacterId(): boolean;
  clearCurrentCharacterId(): void;
  getCurrentCharacterId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setCurrentCharacterId(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    id: number,
    email: string,
    username: string,
    firstName: string,
    lastName: string,
    createdat: string,
    rolesList: Array<authorization_pb.UserRole.AsObject>,
    permissionsList: Array<authorization_pb.UserPermission.AsObject>,
    bannedat?: google_protobuf_wrappers_pb.StringValue.AsObject,
    currentCharacterId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

export class GetAllUsersResponse extends jspb.Message {
  clearUsersList(): void;
  getUsersList(): Array<UserMessage>;
  setUsersList(value: Array<UserMessage>): void;
  addUsers(value?: UserMessage, index?: number): UserMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllUsersResponse): GetAllUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAllUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllUsersResponse;
  static deserializeBinaryFromReader(message: GetAllUsersResponse, reader: jspb.BinaryReader): GetAllUsersResponse;
}

export namespace GetAllUsersResponse {
  export type AsObject = {
    usersList: Array<UserMessage.AsObject>,
  }
}

export class EditUserDetailsRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  hasEmail(): boolean;
  clearEmail(): void;
  getEmail(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmail(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasUsername(): boolean;
  clearUsername(): void;
  getUsername(): google_protobuf_wrappers_pb.StringValue | undefined;
  setUsername(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasFirstName(): boolean;
  clearFirstName(): void;
  getFirstName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setFirstName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasLastName(): boolean;
  clearLastName(): void;
  getLastName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLastName(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditUserDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditUserDetailsRequest): EditUserDetailsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditUserDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditUserDetailsRequest;
  static deserializeBinaryFromReader(message: EditUserDetailsRequest, reader: jspb.BinaryReader): EditUserDetailsRequest;
}

export namespace EditUserDetailsRequest {
  export type AsObject = {
    userId: number,
    email?: google_protobuf_wrappers_pb.StringValue.AsObject,
    username?: google_protobuf_wrappers_pb.StringValue.AsObject,
    firstName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    lastName?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class ChangePasswordRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getCurrentPassword(): string;
  setCurrentPassword(value: string): void;

  getNewPassword(): string;
  setNewPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
  static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

export namespace ChangePasswordRequest {
  export type AsObject = {
    userId: number,
    currentPassword: string,
    newPassword: string,
  }
}

export class StatusResponse extends jspb.Message {
  hasCharacterId(): boolean;
  clearCharacterId(): void;
  getCharacterId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setCharacterId(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatusResponse): StatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusResponse;
  static deserializeBinaryFromReader(message: StatusResponse, reader: jspb.BinaryReader): StatusResponse;
}

export namespace StatusResponse {
  export type AsObject = {
    characterId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

export class StatusRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  hasCharacterId(): boolean;
  clearCharacterId(): void;
  getCharacterId(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setCharacterId(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRequest): StatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRequest;
  static deserializeBinaryFromReader(message: StatusRequest, reader: jspb.BinaryReader): StatusRequest;
}

export namespace StatusRequest {
  export type AsObject = {
    userId: number,
    characterId?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
  }
}

