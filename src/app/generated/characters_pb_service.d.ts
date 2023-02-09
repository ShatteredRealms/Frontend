// package: sro.characters
// file: characters.proto

import * as characters_pb from "./characters_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CharactersServiceGetAllGenders = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof characters_pb.Genders;
};

type CharactersServiceGetAllRealms = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof characters_pb.Realms;
};

type CharactersServiceGetAllCharacters = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof characters_pb.Characters;
};

type CharactersServiceGetAllCharactersForUser = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof characters_pb.UserTarget;
  readonly responseType: typeof characters_pb.Characters;
};

type CharactersServiceGetCharacter = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof characters_pb.CharacterTarget;
  readonly responseType: typeof characters_pb.Character;
};

type CharactersServiceCreateCharacter = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof characters_pb.CreateCharacterRequest;
  readonly responseType: typeof characters_pb.Character;
};

type CharactersServiceDeleteCharacter = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof characters_pb.Character;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CharactersServiceEditCharacter = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof characters_pb.Character;
  readonly responseType: typeof characters_pb.Character;
};

type CharactersServiceAddCharacterPlayTime = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof characters_pb.PlayTimeMessage;
  readonly responseType: typeof characters_pb.PlayTimeMessage;
};

export class CharactersService {
  static readonly serviceName: string;
  static readonly GetAllGenders: CharactersServiceGetAllGenders;
  static readonly GetAllRealms: CharactersServiceGetAllRealms;
  static readonly GetAllCharacters: CharactersServiceGetAllCharacters;
  static readonly GetAllCharactersForUser: CharactersServiceGetAllCharactersForUser;
  static readonly GetCharacter: CharactersServiceGetCharacter;
  static readonly CreateCharacter: CharactersServiceCreateCharacter;
  static readonly DeleteCharacter: CharactersServiceDeleteCharacter;
  static readonly EditCharacter: CharactersServiceEditCharacter;
  static readonly AddCharacterPlayTime: CharactersServiceAddCharacterPlayTime;
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

export class CharactersServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getAllGenders(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: characters_pb.Genders|null) => void
  ): UnaryResponse;
  getAllGenders(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: characters_pb.Genders|null) => void
  ): UnaryResponse;
  getAllRealms(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: characters_pb.Realms|null) => void
  ): UnaryResponse;
  getAllRealms(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: characters_pb.Realms|null) => void
  ): UnaryResponse;
  getAllCharacters(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: characters_pb.Characters|null) => void
  ): UnaryResponse;
  getAllCharacters(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: characters_pb.Characters|null) => void
  ): UnaryResponse;
  getAllCharactersForUser(
    requestMessage: characters_pb.UserTarget,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: characters_pb.Characters|null) => void
  ): UnaryResponse;
  getAllCharactersForUser(
    requestMessage: characters_pb.UserTarget,
    callback: (error: ServiceError|null, responseMessage: characters_pb.Characters|null) => void
  ): UnaryResponse;
  getCharacter(
    requestMessage: characters_pb.CharacterTarget,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: characters_pb.Character|null) => void
  ): UnaryResponse;
  getCharacter(
    requestMessage: characters_pb.CharacterTarget,
    callback: (error: ServiceError|null, responseMessage: characters_pb.Character|null) => void
  ): UnaryResponse;
  createCharacter(
    requestMessage: characters_pb.CreateCharacterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: characters_pb.Character|null) => void
  ): UnaryResponse;
  createCharacter(
    requestMessage: characters_pb.CreateCharacterRequest,
    callback: (error: ServiceError|null, responseMessage: characters_pb.Character|null) => void
  ): UnaryResponse;
  deleteCharacter(
    requestMessage: characters_pb.Character,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteCharacter(
    requestMessage: characters_pb.Character,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  editCharacter(
    requestMessage: characters_pb.Character,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: characters_pb.Character|null) => void
  ): UnaryResponse;
  editCharacter(
    requestMessage: characters_pb.Character,
    callback: (error: ServiceError|null, responseMessage: characters_pb.Character|null) => void
  ): UnaryResponse;
  addCharacterPlayTime(
    requestMessage: characters_pb.PlayTimeMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: characters_pb.PlayTimeMessage|null) => void
  ): UnaryResponse;
  addCharacterPlayTime(
    requestMessage: characters_pb.PlayTimeMessage,
    callback: (error: ServiceError|null, responseMessage: characters_pb.PlayTimeMessage|null) => void
  ): UnaryResponse;
}

