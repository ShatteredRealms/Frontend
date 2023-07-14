// package: sro.gamebackend
// file: sro/gamebackend/servermanager.proto

import * as sro_gamebackend_servermanager_pb from "../../sro/gamebackend/servermanager_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ServerManagerServiceCreateDimension = {
  readonly methodName: string;
  readonly service: typeof ServerManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_gamebackend_servermanager_pb.CreateDimensionRequest;
  readonly responseType: typeof sro_gamebackend_servermanager_pb.Dimension;
};

type ServerManagerServiceDuplicateDimension = {
  readonly methodName: string;
  readonly service: typeof ServerManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_gamebackend_servermanager_pb.DuplicateDimensionRequest;
  readonly responseType: typeof sro_gamebackend_servermanager_pb.Dimension;
};

type ServerManagerServiceGetDimension = {
  readonly methodName: string;
  readonly service: typeof ServerManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_gamebackend_servermanager_pb.DimensionTarget;
  readonly responseType: typeof sro_gamebackend_servermanager_pb.Dimension;
};

type ServerManagerServiceGetAllDimension = {
  readonly methodName: string;
  readonly service: typeof ServerManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof sro_gamebackend_servermanager_pb.Dimensions;
};

type ServerManagerServiceEditDimension = {
  readonly methodName: string;
  readonly service: typeof ServerManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_gamebackend_servermanager_pb.EditDimensionRequest;
  readonly responseType: typeof sro_gamebackend_servermanager_pb.Dimension;
};

type ServerManagerServiceDeleteDimension = {
  readonly methodName: string;
  readonly service: typeof ServerManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_gamebackend_servermanager_pb.DimensionTarget;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ServerManagerServiceCreateMap = {
  readonly methodName: string;
  readonly service: typeof ServerManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_gamebackend_servermanager_pb.CreateMapRequest;
  readonly responseType: typeof sro_gamebackend_servermanager_pb.Map;
};

type ServerManagerServiceGetMap = {
  readonly methodName: string;
  readonly service: typeof ServerManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_gamebackend_servermanager_pb.MapTarget;
  readonly responseType: typeof sro_gamebackend_servermanager_pb.Map;
};

type ServerManagerServiceGetAllMaps = {
  readonly methodName: string;
  readonly service: typeof ServerManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof sro_gamebackend_servermanager_pb.Maps;
};

type ServerManagerServiceEditMap = {
  readonly methodName: string;
  readonly service: typeof ServerManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_gamebackend_servermanager_pb.EditMapRequest;
  readonly responseType: typeof sro_gamebackend_servermanager_pb.Map;
};

type ServerManagerServiceDeleteMap = {
  readonly methodName: string;
  readonly service: typeof ServerManagerService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_gamebackend_servermanager_pb.MapTarget;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class ServerManagerService {
  static readonly serviceName: string;
  static readonly CreateDimension: ServerManagerServiceCreateDimension;
  static readonly DuplicateDimension: ServerManagerServiceDuplicateDimension;
  static readonly GetDimension: ServerManagerServiceGetDimension;
  static readonly GetAllDimension: ServerManagerServiceGetAllDimension;
  static readonly EditDimension: ServerManagerServiceEditDimension;
  static readonly DeleteDimension: ServerManagerServiceDeleteDimension;
  static readonly CreateMap: ServerManagerServiceCreateMap;
  static readonly GetMap: ServerManagerServiceGetMap;
  static readonly GetAllMaps: ServerManagerServiceGetAllMaps;
  static readonly EditMap: ServerManagerServiceEditMap;
  static readonly DeleteMap: ServerManagerServiceDeleteMap;
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

export class ServerManagerServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  createDimension(
    requestMessage: sro_gamebackend_servermanager_pb.CreateDimensionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Dimension|null) => void
  ): UnaryResponse;
  createDimension(
    requestMessage: sro_gamebackend_servermanager_pb.CreateDimensionRequest,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Dimension|null) => void
  ): UnaryResponse;
  duplicateDimension(
    requestMessage: sro_gamebackend_servermanager_pb.DuplicateDimensionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Dimension|null) => void
  ): UnaryResponse;
  duplicateDimension(
    requestMessage: sro_gamebackend_servermanager_pb.DuplicateDimensionRequest,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Dimension|null) => void
  ): UnaryResponse;
  getDimension(
    requestMessage: sro_gamebackend_servermanager_pb.DimensionTarget,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Dimension|null) => void
  ): UnaryResponse;
  getDimension(
    requestMessage: sro_gamebackend_servermanager_pb.DimensionTarget,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Dimension|null) => void
  ): UnaryResponse;
  getAllDimension(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Dimensions|null) => void
  ): UnaryResponse;
  getAllDimension(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Dimensions|null) => void
  ): UnaryResponse;
  editDimension(
    requestMessage: sro_gamebackend_servermanager_pb.EditDimensionRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Dimension|null) => void
  ): UnaryResponse;
  editDimension(
    requestMessage: sro_gamebackend_servermanager_pb.EditDimensionRequest,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Dimension|null) => void
  ): UnaryResponse;
  deleteDimension(
    requestMessage: sro_gamebackend_servermanager_pb.DimensionTarget,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteDimension(
    requestMessage: sro_gamebackend_servermanager_pb.DimensionTarget,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  createMap(
    requestMessage: sro_gamebackend_servermanager_pb.CreateMapRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Map|null) => void
  ): UnaryResponse;
  createMap(
    requestMessage: sro_gamebackend_servermanager_pb.CreateMapRequest,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Map|null) => void
  ): UnaryResponse;
  getMap(
    requestMessage: sro_gamebackend_servermanager_pb.MapTarget,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Map|null) => void
  ): UnaryResponse;
  getMap(
    requestMessage: sro_gamebackend_servermanager_pb.MapTarget,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Map|null) => void
  ): UnaryResponse;
  getAllMaps(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Maps|null) => void
  ): UnaryResponse;
  getAllMaps(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Maps|null) => void
  ): UnaryResponse;
  editMap(
    requestMessage: sro_gamebackend_servermanager_pb.EditMapRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Map|null) => void
  ): UnaryResponse;
  editMap(
    requestMessage: sro_gamebackend_servermanager_pb.EditMapRequest,
    callback: (error: ServiceError|null, responseMessage: sro_gamebackend_servermanager_pb.Map|null) => void
  ): UnaryResponse;
  deleteMap(
    requestMessage: sro_gamebackend_servermanager_pb.MapTarget,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteMap(
    requestMessage: sro_gamebackend_servermanager_pb.MapTarget,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

