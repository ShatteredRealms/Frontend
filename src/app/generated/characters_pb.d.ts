// package: sro.characters
// file: characters.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "./google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class PlayTimeMessage extends jspb.Message {
  getCharacterId(): number;
  setCharacterId(value: number): void;

  getTime(): number;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayTimeMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PlayTimeMessage): PlayTimeMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayTimeMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayTimeMessage;
  static deserializeBinaryFromReader(message: PlayTimeMessage, reader: jspb.BinaryReader): PlayTimeMessage;
}

export namespace PlayTimeMessage {
  export type AsObject = {
    characterId: number,
    time: number,
  }
}

export class DeleteCharacterRequest extends jspb.Message {
  getCharacterId(): number;
  setCharacterId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCharacterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCharacterRequest): DeleteCharacterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCharacterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCharacterRequest;
  static deserializeBinaryFromReader(message: DeleteCharacterRequest, reader: jspb.BinaryReader): DeleteCharacterRequest;
}

export namespace DeleteCharacterRequest {
  export type AsObject = {
    characterId: number,
  }
}

export class CreateCharacterRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getGender(): number;
  setGender(value: number): void;

  getRealm(): number;
  setRealm(value: number): void;

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
    userId: number,
    name: string,
    gender: number,
    realm: number,
  }
}

export class UserTarget extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserTarget.AsObject;
  static toObject(includeInstance: boolean, msg: UserTarget): UserTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserTarget;
  static deserializeBinaryFromReader(message: UserTarget, reader: jspb.BinaryReader): UserTarget;
}

export namespace UserTarget {
  export type AsObject = {
    userId: number,
  }
}

export class CharacterTarget extends jspb.Message {
  getCharacterId(): number;
  setCharacterId(value: number): void;

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
    characterId: number,
  }
}

export class Character extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setOwner(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasGender(): boolean;
  clearGender(): void;
  getGender(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setGender(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  hasRealm(): boolean;
  clearRealm(): void;
  getRealm(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setRealm(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  hasPlayTime(): boolean;
  clearPlayTime(): void;
  getPlayTime(): google_protobuf_wrappers_pb.UInt64Value | undefined;
  setPlayTime(value?: google_protobuf_wrappers_pb.UInt64Value): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Character.AsObject;
  static toObject(includeInstance: boolean, msg: Character): Character.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Character, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Character;
  static deserializeBinaryFromReader(message: Character, reader: jspb.BinaryReader): Character;
}

export namespace Character {
  export type AsObject = {
    id: number,
    owner?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    gender?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    realm?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
    playTime?: google_protobuf_wrappers_pb.UInt64Value.AsObject,
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

export class Characters extends jspb.Message {
  clearCharactersList(): void;
  getCharactersList(): Array<Character>;
  setCharactersList(value: Array<Character>): void;
  addCharacters(value?: Character, index?: number): Character;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Characters.AsObject;
  static toObject(includeInstance: boolean, msg: Characters): Characters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Characters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Characters;
  static deserializeBinaryFromReader(message: Characters, reader: jspb.BinaryReader): Characters;
}

export namespace Characters {
  export type AsObject = {
    charactersList: Array<Character.AsObject>,
  }
}

export class Gender extends jspb.Message {
  getId(): number;
  setId(value: number): void;

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
    id: number,
    name: string,
  }
}

export class Realm extends jspb.Message {
  getId(): number;
  setId(value: number): void;

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
    id: number,
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

