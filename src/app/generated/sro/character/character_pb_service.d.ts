// package: sro.character
// file: sro/character/character.proto

import * as sro_character_character_pb from "../../sro/character/character_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as sro_globals_pb from "../../sro/globals_pb";
import {grpc} from "@improbable-eng/grpc-web";

type CharacterServiceGetCharacters = {
  readonly methodName: string;
  readonly service: typeof CharacterService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof sro_character_character_pb.CharactersDetails;
};

type CharacterServiceGetCharacter = {
  readonly methodName: string;
  readonly service: typeof CharacterService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_character_character_pb.CharacterTarget;
  readonly responseType: typeof sro_character_character_pb.CharacterDetails;
};

type CharacterServiceCreateCharacter = {
  readonly methodName: string;
  readonly service: typeof CharacterService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_character_character_pb.CreateCharacterRequest;
  readonly responseType: typeof sro_character_character_pb.CharacterDetails;
};

type CharacterServiceDeleteCharacter = {
  readonly methodName: string;
  readonly service: typeof CharacterService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_character_character_pb.CharacterTarget;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CharacterServiceGetAllCharactersForUser = {
  readonly methodName: string;
  readonly service: typeof CharacterService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_globals_pb.UserTarget;
  readonly responseType: typeof sro_character_character_pb.CharactersDetails;
};

type CharacterServiceEditCharacter = {
  readonly methodName: string;
  readonly service: typeof CharacterService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_character_character_pb.EditCharacterRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type CharacterServiceAddCharacterPlayTime = {
  readonly methodName: string;
  readonly service: typeof CharacterService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_character_character_pb.AddPlayTimeRequest;
  readonly responseType: typeof sro_character_character_pb.PlayTimeResponse;
};

type CharacterServiceGetInventory = {
  readonly methodName: string;
  readonly service: typeof CharacterService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_character_character_pb.CharacterTarget;
  readonly responseType: typeof sro_character_character_pb.Inventory;
};

type CharacterServiceSetInventory = {
  readonly methodName: string;
  readonly service: typeof CharacterService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_character_character_pb.UpdateInventoryRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class CharacterService {
  static readonly serviceName: string;
  static readonly GetCharacters: CharacterServiceGetCharacters;
  static readonly GetCharacter: CharacterServiceGetCharacter;
  static readonly CreateCharacter: CharacterServiceCreateCharacter;
  static readonly DeleteCharacter: CharacterServiceDeleteCharacter;
  static readonly GetAllCharactersForUser: CharacterServiceGetAllCharactersForUser;
  static readonly EditCharacter: CharacterServiceEditCharacter;
  static readonly AddCharacterPlayTime: CharacterServiceAddCharacterPlayTime;
  static readonly GetInventory: CharacterServiceGetInventory;
  static readonly SetInventory: CharacterServiceSetInventory;
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

export class CharacterServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getCharacters(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_character_character_pb.CharactersDetails|null) => void
  ): UnaryResponse;
  getCharacters(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: sro_character_character_pb.CharactersDetails|null) => void
  ): UnaryResponse;
  getCharacter(
    requestMessage: sro_character_character_pb.CharacterTarget,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_character_character_pb.CharacterDetails|null) => void
  ): UnaryResponse;
  getCharacter(
    requestMessage: sro_character_character_pb.CharacterTarget,
    callback: (error: ServiceError|null, responseMessage: sro_character_character_pb.CharacterDetails|null) => void
  ): UnaryResponse;
  createCharacter(
    requestMessage: sro_character_character_pb.CreateCharacterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_character_character_pb.CharacterDetails|null) => void
  ): UnaryResponse;
  createCharacter(
    requestMessage: sro_character_character_pb.CreateCharacterRequest,
    callback: (error: ServiceError|null, responseMessage: sro_character_character_pb.CharacterDetails|null) => void
  ): UnaryResponse;
  deleteCharacter(
    requestMessage: sro_character_character_pb.CharacterTarget,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteCharacter(
    requestMessage: sro_character_character_pb.CharacterTarget,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getAllCharactersForUser(
    requestMessage: sro_globals_pb.UserTarget,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_character_character_pb.CharactersDetails|null) => void
  ): UnaryResponse;
  getAllCharactersForUser(
    requestMessage: sro_globals_pb.UserTarget,
    callback: (error: ServiceError|null, responseMessage: sro_character_character_pb.CharactersDetails|null) => void
  ): UnaryResponse;
  editCharacter(
    requestMessage: sro_character_character_pb.EditCharacterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  editCharacter(
    requestMessage: sro_character_character_pb.EditCharacterRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  addCharacterPlayTime(
    requestMessage: sro_character_character_pb.AddPlayTimeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_character_character_pb.PlayTimeResponse|null) => void
  ): UnaryResponse;
  addCharacterPlayTime(
    requestMessage: sro_character_character_pb.AddPlayTimeRequest,
    callback: (error: ServiceError|null, responseMessage: sro_character_character_pb.PlayTimeResponse|null) => void
  ): UnaryResponse;
  getInventory(
    requestMessage: sro_character_character_pb.CharacterTarget,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_character_character_pb.Inventory|null) => void
  ): UnaryResponse;
  getInventory(
    requestMessage: sro_character_character_pb.CharacterTarget,
    callback: (error: ServiceError|null, responseMessage: sro_character_character_pb.Inventory|null) => void
  ): UnaryResponse;
  setInventory(
    requestMessage: sro_character_character_pb.UpdateInventoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  setInventory(
    requestMessage: sro_character_character_pb.UpdateInventoryRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

