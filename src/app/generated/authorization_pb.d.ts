// package: sro.accounts
// file: authorization.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "./google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class IDMessage extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IDMessage.AsObject;
  static toObject(includeInstance: boolean, msg: IDMessage): IDMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IDMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IDMessage;
  static deserializeBinaryFromReader(message: IDMessage, reader: jspb.BinaryReader): IDMessage;
}

export namespace IDMessage {
  export type AsObject = {
    id: number,
  }
}

export class Permission extends jspb.Message {
  hasPermission(): boolean;
  clearPermission(): void;
  getPermission(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPermission(value?: google_protobuf_wrappers_pb.StringValue): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permission.AsObject;
  static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permission;
  static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
  export type AsObject = {
    permission?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class UserPermission extends jspb.Message {
  hasPermission(): boolean;
  clearPermission(): void;
  getPermission(): google_protobuf_wrappers_pb.StringValue | undefined;
  setPermission(value?: google_protobuf_wrappers_pb.StringValue): void;

  getOther(): boolean;
  setOther(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPermission.AsObject;
  static toObject(includeInstance: boolean, msg: UserPermission): UserPermission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserPermission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPermission;
  static deserializeBinaryFromReader(message: UserPermission, reader: jspb.BinaryReader): UserPermission;
}

export namespace UserPermission {
  export type AsObject = {
    permission?: google_protobuf_wrappers_pb.StringValue.AsObject,
    other: boolean,
  }
}

export class UserPermissions extends jspb.Message {
  clearPermissionsList(): void;
  getPermissionsList(): Array<UserPermission>;
  setPermissionsList(value: Array<UserPermission>): void;
  addPermissions(value?: UserPermission, index?: number): UserPermission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPermissions.AsObject;
  static toObject(includeInstance: boolean, msg: UserPermissions): UserPermissions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserPermissions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPermissions;
  static deserializeBinaryFromReader(message: UserPermissions, reader: jspb.BinaryReader): UserPermissions;
}

export namespace UserPermissions {
  export type AsObject = {
    permissionsList: Array<UserPermission.AsObject>,
  }
}

export class UserRole extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<UserPermission>;
  setPermissionsList(value: Array<UserPermission>): void;
  addPermissions(value?: UserPermission, index?: number): UserPermission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRole.AsObject;
  static toObject(includeInstance: boolean, msg: UserRole): UserRole.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRole;
  static deserializeBinaryFromReader(message: UserRole, reader: jspb.BinaryReader): UserRole;
}

export namespace UserRole {
  export type AsObject = {
    id: number,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    permissionsList: Array<UserPermission.AsObject>,
  }
}

export class UserRoles extends jspb.Message {
  clearRolesList(): void;
  getRolesList(): Array<UserRole>;
  setRolesList(value: Array<UserRole>): void;
  addRoles(value?: UserRole, index?: number): UserRole;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRoles.AsObject;
  static toObject(includeInstance: boolean, msg: UserRoles): UserRoles.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserRoles, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRoles;
  static deserializeBinaryFromReader(message: UserRoles, reader: jspb.BinaryReader): UserRoles;
}

export namespace UserRoles {
  export type AsObject = {
    rolesList: Array<UserRole.AsObject>,
  }
}

export class AuthorizationMessage extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  clearRolesList(): void;
  getRolesList(): Array<UserRole>;
  setRolesList(value: Array<UserRole>): void;
  addRoles(value?: UserRole, index?: number): UserRole;

  clearPermissionsList(): void;
  getPermissionsList(): Array<UserPermission>;
  setPermissionsList(value: Array<UserPermission>): void;
  addPermissions(value?: UserPermission, index?: number): UserPermission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizationMessage.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizationMessage): AuthorizationMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorizationMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizationMessage;
  static deserializeBinaryFromReader(message: AuthorizationMessage, reader: jspb.BinaryReader): AuthorizationMessage;
}

export namespace AuthorizationMessage {
  export type AsObject = {
    userId: number,
    rolesList: Array<UserRole.AsObject>,
    permissionsList: Array<UserPermission.AsObject>,
  }
}

