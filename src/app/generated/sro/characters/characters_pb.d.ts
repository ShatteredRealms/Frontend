// package: sro.characters
// file: sro/characters/characters.proto

import * as jspb from "google-protobuf";
import * as sro_globals_pb from "../../sro/globals_pb";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class PlayTimeResponse extends jspb.Message {
  getTime(): number;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayTimeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlayTimeResponse): PlayTimeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayTimeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayTimeResponse;
  static deserializeBinaryFromReader(message: PlayTimeResponse, reader: jspb.BinaryReader): PlayTimeResponse;
}

export namespace PlayTimeResponse {
  export type AsObject = {
    time: number,
  }
}

export class AddPlayTimeRequest extends jspb.Message {
  hasCharacter(): boolean;
  clearCharacter(): void;
  getCharacter(): CharacterTarget | undefined;
  setCharacter(value?: CharacterTarget): void;

  getTime(): number;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPlayTimeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddPlayTimeRequest): AddPlayTimeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddPlayTimeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPlayTimeRequest;
  static deserializeBinaryFromReader(message: AddPlayTimeRequest, reader: jspb.BinaryReader): AddPlayTimeRequest;
}

export namespace AddPlayTimeRequest {
  export type AsObject = {
    character?: CharacterTarget.AsObject,
    time: number,
  }
}

export class CreateCharacterRequest extends jspb.Message {
  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): sro_globals_pb.UserTarget | undefined;
  setOwner(value?: sro_globals_pb.UserTarget): void;

  getName(): string;
  setName(value: string): void;

  getGender(): string;
  setGender(value: string): void;

  getRealm(): string;
  setRealm(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCharacterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCharacterRequest): CreateCharacterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCharacterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCharacterRequest;
  static deserializeBinaryFromReader(message: CreateCharacterRequest, reader: jspb.BinaryReader): CreateCharacterRequest;
}

export namespace CreateCharacterRequest {
  export type AsObject = {
    owner?: sro_globals_pb.UserTarget.AsObject,
    name: string,
    gender: string,
    realm: string,
  }
}

export class CharacterTarget extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number;
  setId(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  getTargetCase(): CharacterTarget.TargetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterTarget.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterTarget): CharacterTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CharacterTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterTarget;
  static deserializeBinaryFromReader(message: CharacterTarget, reader: jspb.BinaryReader): CharacterTarget;
}

export namespace CharacterTarget {
  export type AsObject = {
    id: number,
    name: string,
  }

  export enum TargetCase {
    TARGET_NOT_SET = 0,
    ID = 1,
    NAME = 2,
  }
}

export class EditCharacterRequest extends jspb.Message {
  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): CharacterTarget | undefined;
  setTarget(value?: CharacterTarget): void;

  hasOwnerId(): boolean;
  clearOwnerId(): void;
  getOwnerId(): string;
  setOwnerId(value: string): void;

  hasNewName(): boolean;
  clearNewName(): void;
  getNewName(): string;
  setNewName(value: string): void;

  hasGender(): boolean;
  clearGender(): void;
  getGender(): string;
  setGender(value: string): void;

  hasRealm(): boolean;
  clearRealm(): void;
  getRealm(): string;
  setRealm(value: string): void;

  hasPlayTime(): boolean;
  clearPlayTime(): void;
  getPlayTime(): number;
  setPlayTime(value: number): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditCharacterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditCharacterRequest): EditCharacterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditCharacterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditCharacterRequest;
  static deserializeBinaryFromReader(message: EditCharacterRequest, reader: jspb.BinaryReader): EditCharacterRequest;
}

export namespace EditCharacterRequest {
  export type AsObject = {
    target?: CharacterTarget.AsObject,
    ownerId: string,
    newName: string,
    gender: string,
    realm: string,
    playTime: number,
    location?: Location.AsObject,
  }
}

export class CharacterResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getOwner(): string;
  setOwner(value: string): void;

  getName(): string;
  setName(value: string): void;

  getGender(): string;
  setGender(value: string): void;

  getRealm(): string;
  setRealm(value: string): void;

  getPlayTime(): number;
  setPlayTime(value: number): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterResponse): CharacterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CharacterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterResponse;
  static deserializeBinaryFromReader(message: CharacterResponse, reader: jspb.BinaryReader): CharacterResponse;
}

export namespace CharacterResponse {
  export type AsObject = {
    id: number,
    owner: string,
    name: string,
    gender: string,
    realm: string,
    playTime: number,
    location?: Location.AsObject,
  }
}

export class Location extends jspb.Message {
  getWorld(): string;
  setWorld(value: string): void;

  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    world: string,
    x: number,
    y: number,
    z: number,
  }
}

export class CharactersResponse extends jspb.Message {
  clearCharactersList(): void;
  getCharactersList(): Array<CharacterResponse>;
  setCharactersList(value: Array<CharacterResponse>): void;
  addCharacters(value?: CharacterResponse, index?: number): CharacterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharactersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CharactersResponse): CharactersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CharactersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharactersResponse;
  static deserializeBinaryFromReader(message: CharactersResponse, reader: jspb.BinaryReader): CharactersResponse;
}

export namespace CharactersResponse {
  export type AsObject = {
    charactersList: Array<CharacterResponse.AsObject>,
  }
}

export class Gender extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Gender.AsObject;
  static toObject(includeInstance: boolean, msg: Gender): Gender.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Gender, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Gender;
  static deserializeBinaryFromReader(message: Gender, reader: jspb.BinaryReader): Gender;
}

export namespace Gender {
  export type AsObject = {
    name: string,
  }
}

export class Realm extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Realm.AsObject;
  static toObject(includeInstance: boolean, msg: Realm): Realm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Realm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Realm;
  static deserializeBinaryFromReader(message: Realm, reader: jspb.BinaryReader): Realm;
}

export namespace Realm {
  export type AsObject = {
    name: string,
  }
}

export class Genders extends jspb.Message {
  clearGendersList(): void;
  getGendersList(): Array<Gender>;
  setGendersList(value: Array<Gender>): void;
  addGenders(value?: Gender, index?: number): Gender;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Genders.AsObject;
  static toObject(includeInstance: boolean, msg: Genders): Genders.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Genders, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Genders;
  static deserializeBinaryFromReader(message: Genders, reader: jspb.BinaryReader): Genders;
}

export namespace Genders {
  export type AsObject = {
    gendersList: Array<Gender.AsObject>,
  }
}

export class Realms extends jspb.Message {
  clearRealmsList(): void;
  getRealmsList(): Array<Realm>;
  setRealmsList(value: Array<Realm>): void;
  addRealms(value?: Realm, index?: number): Realm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Realms.AsObject;
  static toObject(includeInstance: boolean, msg: Realms): Realms.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Realms, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Realms;
  static deserializeBinaryFromReader(message: Realms, reader: jspb.BinaryReader): Realms;
}

export namespace Realms {
  export type AsObject = {
    realmsList: Array<Realm.AsObject>,
  }
}

