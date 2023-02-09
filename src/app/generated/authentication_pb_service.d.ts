// package: sro.accounts
// file: authentication.proto

import * as authentication_pb from "./authentication_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type AuthenticationServiceRegister = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof authentication_pb.RegisterAccountMessage;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthenticationServiceLogin = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof authentication_pb.LoginMessage;
  readonly responseType: typeof authentication_pb.LoginResponse;
};

type AuthenticationServiceRefresh = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof authentication_pb.AuthToken;
};

type AuthenticationServiceForgotUsername = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof authentication_pb.ForgotUsernameMessage;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthenticationServiceForgotPassword = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof authentication_pb.ForgotPasswordMessage;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type AuthenticationServiceResetPassword = {
  readonly methodName: string;
  readonly service: typeof AuthenticationService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof authentication_pb.RestPasswordMessage;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class AuthenticationService {
  static readonly serviceName: string;
  static readonly Register: AuthenticationServiceRegister;
  static readonly Login: AuthenticationServiceLogin;
  static readonly Refresh: AuthenticationServiceRefresh;
  static readonly ForgotUsername: AuthenticationServiceForgotUsername;
  static readonly ForgotPassword: AuthenticationServiceForgotPassword;
  static readonly ResetPassword: AuthenticationServiceResetPassword;
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

export class AuthenticationServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  register(
    requestMessage: authentication_pb.RegisterAccountMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  register(
    requestMessage: authentication_pb.RegisterAccountMessage,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  login(
    requestMessage: authentication_pb.LoginMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: authentication_pb.LoginResponse|null) => void
  ): UnaryResponse;
  login(
    requestMessage: authentication_pb.LoginMessage,
    callback: (error: ServiceError|null, responseMessage: authentication_pb.LoginResponse|null) => void
  ): UnaryResponse;
  refresh(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: authentication_pb.AuthToken|null) => void
  ): UnaryResponse;
  refresh(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: authentication_pb.AuthToken|null) => void
  ): UnaryResponse;
  forgotUsername(
    requestMessage: authentication_pb.ForgotUsernameMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  forgotUsername(
    requestMessage: authentication_pb.ForgotUsernameMessage,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  forgotPassword(
    requestMessage: authentication_pb.ForgotPasswordMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  forgotPassword(
    requestMessage: authentication_pb.ForgotPasswordMessage,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  resetPassword(
    requestMessage: authentication_pb.RestPasswordMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  resetPassword(
    requestMessage: authentication_pb.RestPasswordMessage,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

