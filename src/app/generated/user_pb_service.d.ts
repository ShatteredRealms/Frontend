// package: sro.accounts
// file: user.proto

import * as user_pb from "./user_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type UserServiceGetAll = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof user_pb.GetAllUsersResponse;
};

type UserServiceGet = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.GetUserMessage;
  readonly responseType: typeof user_pb.GetUserResponse;
};

type UserServiceEdit = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.EditUserDetailsRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type UserServiceChangePassword = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.ChangePasswordRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type UserServiceBan = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.GetUserMessage;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type UserServiceUnBan = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.GetUserMessage;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type UserServiceGetStatus = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.GetUserMessage;
  readonly responseType: typeof user_pb.StatusResponse;
};

type UserServiceSetStatus = {
  readonly methodName: string;
  readonly service: typeof UserService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof user_pb.StatusRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class UserService {
  static readonly serviceName: string;
  static readonly GetAll: UserServiceGetAll;
  static readonly Get: UserServiceGet;
  static readonly Edit: UserServiceEdit;
  static readonly ChangePassword: UserServiceChangePassword;
  static readonly Ban: UserServiceBan;
  static readonly UnBan: UserServiceUnBan;
  static readonly GetStatus: UserServiceGetStatus;
  static readonly SetStatus: UserServiceSetStatus;
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

export class UserServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAll(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_pb.GetAllUsersResponse|null) => void
  ): UnaryResponse;
  getAll(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: user_pb.GetAllUsersResponse|null) => void
  ): UnaryResponse;
  get(
    requestMessage: user_pb.GetUserMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_pb.GetUserResponse|null) => void
  ): UnaryResponse;
  get(
    requestMessage: user_pb.GetUserMessage,
    callback: (error: ServiceError|null, responseMessage: user_pb.GetUserResponse|null) => void
  ): UnaryResponse;
  edit(
    requestMessage: user_pb.EditUserDetailsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  edit(
    requestMessage: user_pb.EditUserDetailsRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  changePassword(
    requestMessage: user_pb.ChangePasswordRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  changePassword(
    requestMessage: user_pb.ChangePasswordRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  ban(
    requestMessage: user_pb.GetUserMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  ban(
    requestMessage: user_pb.GetUserMessage,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  unBan(
    requestMessage: user_pb.GetUserMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  unBan(
    requestMessage: user_pb.GetUserMessage,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getStatus(
    requestMessage: user_pb.GetUserMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: user_pb.StatusResponse|null) => void
  ): UnaryResponse;
  getStatus(
    requestMessage: user_pb.GetUserMessage,
    callback: (error: ServiceError|null, responseMessage: user_pb.StatusResponse|null) => void
  ): UnaryResponse;
  setStatus(
    requestMessage: user_pb.StatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  setStatus(
    requestMessage: user_pb.StatusRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

