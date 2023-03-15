// package: sro.characters
// file: sro/characters/characters.proto

import * as sro_characters_characters_pb from "../../sro/characters/characters_pb";
import * as sro_globals_pb from "../../sro/globals_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CharactersServiceGetGenders = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof sro_characters_characters_pb.Genders;
};

type CharactersServiceGetRealms = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof sro_characters_characters_pb.Realms;
};

type CharactersServiceGetCharacters = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof sro_characters_characters_pb.CharactersResponse;
};

type CharactersServiceGetCharacter = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_characters_characters_pb.CharacterTarget;
  readonly responseType: typeof sro_characters_characters_pb.CharacterResponse;
};

type CharactersServiceCreateCharacter = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_characters_characters_pb.CreateCharacterRequest;
  readonly responseType: typeof sro_characters_characters_pb.CharacterResponse;
};

type CharactersServiceDeleteCharacter = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_characters_characters_pb.CharacterTarget;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CharactersServiceGetAllCharactersForUser = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_globals_pb.UserTarget;
  readonly responseType: typeof sro_characters_characters_pb.CharactersResponse;
};

type CharactersServiceEditCharacter = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_characters_characters_pb.EditCharacterRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CharactersServiceAddCharacterPlayTime = {
  readonly methodName: string;
  readonly service: typeof CharactersService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_characters_characters_pb.AddPlayTimeRequest;
  readonly responseType: typeof sro_characters_characters_pb.PlayTimeResponse;
};

export class CharactersService {
  static readonly serviceName: string;
  static readonly GetGenders: CharactersServiceGetGenders;
  static readonly GetRealms: CharactersServiceGetRealms;
  static readonly GetCharacters: CharactersServiceGetCharacters;
  static readonly GetCharacter: CharactersServiceGetCharacter;
  static readonly CreateCharacter: CharactersServiceCreateCharacter;
  static readonly DeleteCharacter: CharactersServiceDeleteCharacter;
  static readonly GetAllCharactersForUser: CharactersServiceGetAllCharactersForUser;
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
  getGenders(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_characters_characters_pb.Genders|null) => void
  ): UnaryResponse;
  getGenders(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: sro_characters_characters_pb.Genders|null) => void
  ): UnaryResponse;
  getRealms(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_characters_characters_pb.Realms|null) => void
  ): UnaryResponse;
  getRealms(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: sro_characters_characters_pb.Realms|null) => void
  ): UnaryResponse;
  getCharacters(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_characters_characters_pb.CharactersResponse|null) => void
  ): UnaryResponse;
  getCharacters(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: sro_characters_characters_pb.CharactersResponse|null) => void
  ): UnaryResponse;
  getCharacter(
    requestMessage: sro_characters_characters_pb.CharacterTarget,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_characters_characters_pb.CharacterResponse|null) => void
  ): UnaryResponse;
  getCharacter(
    requestMessage: sro_characters_characters_pb.CharacterTarget,
    callback: (error: ServiceError|null, responseMessage: sro_characters_characters_pb.CharacterResponse|null) => void
  ): UnaryResponse;
  createCharacter(
    requestMessage: sro_characters_characters_pb.CreateCharacterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_characters_characters_pb.CharacterResponse|null) => void
  ): UnaryResponse;
  createCharacter(
    requestMessage: sro_characters_characters_pb.CreateCharacterRequest,
    callback: (error: ServiceError|null, responseMessage: sro_characters_characters_pb.CharacterResponse|null) => void
  ): UnaryResponse;
  deleteCharacter(
    requestMessage: sro_characters_characters_pb.CharacterTarget,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteCharacter(
    requestMessage: sro_characters_characters_pb.CharacterTarget,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getAllCharactersForUser(
    requestMessage: sro_globals_pb.UserTarget,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_characters_characters_pb.CharactersResponse|null) => void
  ): UnaryResponse;
  getAllCharactersForUser(
    requestMessage: sro_globals_pb.UserTarget,
    callback: (error: ServiceError|null, responseMessage: sro_characters_characters_pb.CharactersResponse|null) => void
  ): UnaryResponse;
  editCharacter(
    requestMessage: sro_characters_characters_pb.EditCharacterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  editCharacter(
    requestMessage: sro_characters_characters_pb.EditCharacterRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  addCharacterPlayTime(
    requestMessage: sro_characters_characters_pb.AddPlayTimeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_characters_characters_pb.PlayTimeResponse|null) => void
  ): UnaryResponse;
  addCharacterPlayTime(
    requestMessage: sro_characters_characters_pb.AddPlayTimeRequest,
    callback: (error: ServiceError|null, responseMessage: sro_characters_characters_pb.PlayTimeResponse|null) => void
  ): UnaryResponse;
}

