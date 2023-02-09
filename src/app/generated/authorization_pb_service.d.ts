// package: sro.accounts
// file: authorization.proto

import * as authorization_pb from "./authorization_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthorizationServiceGetAuthorization = {
  readonly methodName: string;
  readonly service: typeof AuthorizationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof authorization_pb.IDMessage;
  readonly responseType: typeof authorization_pb.AuthorizationMessage;
};

type AuthorizationServiceAddAuthorization = {
  readonly methodName: string;
  readonly service: typeof AuthorizationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof authorization_pb.AuthorizationMessage;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthorizationServiceRemoveAuthorization = {
  readonly methodName: string;
  readonly service: typeof AuthorizationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof authorization_pb.AuthorizationMessage;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthorizationServiceGetRoles = {
  readonly methodName: string;
  readonly service: typeof AuthorizationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof authorization_pb.UserRoles;
};

type AuthorizationServiceGetRole = {
  readonly methodName: string;
  readonly service: typeof AuthorizationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof authorization_pb.IDMessage;
  readonly responseType: typeof authorization_pb.UserRole;
};

type AuthorizationServiceCreateRole = {
  readonly methodName: string;
  readonly service: typeof AuthorizationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof authorization_pb.UserRole;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthorizationServiceEditRole = {
  readonly methodName: string;
  readonly service: typeof AuthorizationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof authorization_pb.UserRole;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthorizationServiceDeleteRole = {
  readonly methodName: string;
  readonly service: typeof AuthorizationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof authorization_pb.UserRole;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthorizationServiceGetAllPermissions = {
  readonly methodName: string;
  readonly service: typeof AuthorizationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof authorization_pb.UserPermissions;
};

type AuthorizationServiceSubscribeUserUpdates = {
  readonly methodName: string;
  readonly service: typeof AuthorizationService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof authorization_pb.IDMessage;
};

type AuthorizationServiceSubscribeRoleUpdates = {
  readonly methodName: string;
  readonly service: typeof AuthorizationService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof authorization_pb.IDMessage;
};

export class AuthorizationService {
  static readonly serviceName: string;
  static readonly GetAuthorization: AuthorizationServiceGetAuthorization;
  static readonly AddAuthorization: AuthorizationServiceAddAuthorization;
  static readonly RemoveAuthorization: AuthorizationServiceRemoveAuthorization;
  static readonly GetRoles: AuthorizationServiceGetRoles;
  static readonly GetRole: AuthorizationServiceGetRole;
  static readonly CreateRole: AuthorizationServiceCreateRole;
  static readonly EditRole: AuthorizationServiceEditRole;
  static readonly DeleteRole: AuthorizationServiceDeleteRole;
  static readonly GetAllPermissions: AuthorizationServiceGetAllPermissions;
  static readonly SubscribeUserUpdates: AuthorizationServiceSubscribeUserUpdates;
  static readonly SubscribeRoleUpdates: AuthorizationServiceSubscribeRoleUpdates;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AuthorizationServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAuthorization(
    requestMessage: authorization_pb.IDMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: authorization_pb.AuthorizationMessage|null) => void
  ): UnaryResponse;
  getAuthorization(
    requestMessage: authorization_pb.IDMessage,
    callback: (error: ServiceError|null, responseMessage: authorization_pb.AuthorizationMessage|null) => void
  ): UnaryResponse;
  addAuthorization(
    requestMessage: authorization_pb.AuthorizationMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  addAuthorization(
    requestMessage: authorization_pb.AuthorizationMessage,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  removeAuthorization(
    requestMessage: authorization_pb.AuthorizationMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  removeAuthorization(
    requestMessage: authorization_pb.AuthorizationMessage,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getRoles(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: authorization_pb.UserRoles|null) => void
  ): UnaryResponse;
  getRoles(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: authorization_pb.UserRoles|null) => void
  ): UnaryResponse;
  getRole(
    requestMessage: authorization_pb.IDMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: authorization_pb.UserRole|null) => void
  ): UnaryResponse;
  getRole(
    requestMessage: authorization_pb.IDMessage,
    callback: (error: ServiceError|null, responseMessage: authorization_pb.UserRole|null) => void
  ): UnaryResponse;
  createRole(
    requestMessage: authorization_pb.UserRole,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  createRole(
    requestMessage: authorization_pb.UserRole,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  editRole(
    requestMessage: authorization_pb.UserRole,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  editRole(
    requestMessage: authorization_pb.UserRole,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteRole(
    requestMessage: authorization_pb.UserRole,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteRole(
    requestMessage: authorization_pb.UserRole,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getAllPermissions(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: authorization_pb.UserPermissions|null) => void
  ): UnaryResponse;
  getAllPermissions(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: authorization_pb.UserPermissions|null) => void
  ): UnaryResponse;
  subscribeUserUpdates(requestMessage: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata): ResponseStream<authorization_pb.IDMessage>;
  subscribeRoleUpdates(requestMessage: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata): ResponseStream<authorization_pb.IDMessage>;
}

