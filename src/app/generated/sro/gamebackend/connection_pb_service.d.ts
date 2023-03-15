// package: sro.gamebackend
// file: sro/gamebackend/connection.proto

import * as sro_gamebackend_connection_pb from "../../sro/gamebackend/connection_pb";
import * as sro_characters_characters_pb from "../../sro/characters/characters_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ConnectionServiceConnectGameServer = {
  readonly methodName: string;
  readonly service: typeof ConnectionService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_characters_characters_pb.CharacterTarget;
  readonly responseType: typeof sro_gamebackend_connection_pb.ConnectGameServerResponse;
};

export class ConnectionService {
  static readonly serviceName: string;
  static readonly ConnectGameServer: ConnectionServiceConnectGameServer;
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

export class ConnectionServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  connectGameServer(
    requestMessage: sro_characters_characters_pb.CharacterTarget,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_connection_pb.ConnectGameServerResponse|null) => void
  ): UnaryResponse;
  connectGameServer(
    requestMessage: sro_characters_characters_pb.CharacterTarget,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_connection_pb.ConnectGameServerResponse|null) => void
  ): UnaryResponse;
}

