// package: sro.character
// file: sro/character/character.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as sro_globals_pb from "../../sro/globals_pb";

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

  getTypeCase(): CharacterTarget.TypeCase;
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

  export enum TypeCase {
    TYPE_NOT_SET = 0,
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
  getLocation(): sro_globals_pb.Location | undefined;
  setLocation(value?: sro_globals_pb.Location): void;

  getOptionalOwnerIdCase(): EditCharacterRequest.OptionalOwnerIdCase;
  getOptionalNewNameCase(): EditCharacterRequest.OptionalNewNameCase;
  getOptionalGenderCase(): EditCharacterRequest.OptionalGenderCase;
  getOptionalRealmCase(): EditCharacterRequest.OptionalRealmCase;
  getOptionalPlayTimeCase(): EditCharacterRequest.OptionalPlayTimeCase;
  getOptionalLocationCase(): EditCharacterRequest.OptionalLocationCase;
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
    location?: sro_globals_pb.Location.AsObject,
  }

  export enum OptionalOwnerIdCase {
    OPTIONAL_OWNER_ID_NOT_SET = 0,
    OWNER_ID = 3,
  }

  export enum OptionalNewNameCase {
    OPTIONAL_NEW_NAME_NOT_SET = 0,
    NEW_NAME = 4,
  }

  export enum OptionalGenderCase {
    OPTIONAL_GENDER_NOT_SET = 0,
    GENDER = 5,
  }

  export enum OptionalRealmCase {
    OPTIONAL_REALM_NOT_SET = 0,
    REALM = 6,
  }

  export enum OptionalPlayTimeCase {
    OPTIONAL_PLAY_TIME_NOT_SET = 0,
    PLAY_TIME = 7,
  }

  export enum OptionalLocationCase {
    OPTIONAL_LOCATION_NOT_SET = 0,
    LOCATION = 8,
  }
}

export class CharacterDetails extends jspb.Message {
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
  getLocation(): sro_globals_pb.Location | undefined;
  setLocation(value?: sro_globals_pb.Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterDetails.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterDetails): CharacterDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CharacterDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterDetails;
  static deserializeBinaryFromReader(message: CharacterDetails, reader: jspb.BinaryReader): CharacterDetails;
}

export namespace CharacterDetails {
  export type AsObject = {
    id: number,
    owner: string,
    name: string,
    gender: string,
    realm: string,
    playTime: number,
    location?: sro_globals_pb.Location.AsObject,
  }
}

export class CharactersDetails extends jspb.Message {
  clearCharactersList(): void;
  getCharactersList(): Array<CharacterDetails>;
  setCharactersList(value: Array<CharacterDetails>): void;
  addCharacters(value?: CharacterDetails, index?: number): CharacterDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharactersDetails.AsObject;
  static toObject(includeInstance: boolean, msg: CharactersDetails): CharactersDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CharactersDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharactersDetails;
  static deserializeBinaryFromReader(message: CharactersDetails, reader: jspb.BinaryReader): CharactersDetails;
}

export namespace CharactersDetails {
  export type AsObject = {
    charactersList: Array<CharacterDetails.AsObject>,
  }
}

export class InventoryItem extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSlot(): number;
  setSlot(value: number): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InventoryItem.AsObject;
  static toObject(includeInstance: boolean, msg: InventoryItem): InventoryItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InventoryItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InventoryItem;
  static deserializeBinaryFromReader(message: InventoryItem, reader: jspb.BinaryReader): InventoryItem;
}

export namespace InventoryItem {
  export type AsObject = {
    id: string,
    slot: number,
    quantity: number,
  }
}

export class Inventory extends jspb.Message {
  clearInventoryItemsList(): void;
  getInventoryItemsList(): Array<InventoryItem>;
  setInventoryItemsList(value: Array<InventoryItem>): void;
  addInventoryItems(value?: InventoryItem, index?: number): InventoryItem;

  clearBankItemsList(): void;
  getBankItemsList(): Array<InventoryItem>;
  setBankItemsList(value: Array<InventoryItem>): void;
  addBankItems(value?: InventoryItem, index?: number): InventoryItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Inventory.AsObject;
  static toObject(includeInstance: boolean, msg: Inventory): Inventory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Inventory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Inventory;
  static deserializeBinaryFromReader(message: Inventory, reader: jspb.BinaryReader): Inventory;
}

export namespace Inventory {
  export type AsObject = {
    inventoryItemsList: Array<InventoryItem.AsObject>,
    bankItemsList: Array<InventoryItem.AsObject>,
  }
}

export class UpdateInventoryRequest extends jspb.Message {
  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): CharacterTarget | undefined;
  setTarget(value?: CharacterTarget): void;

  clearInventoryItemsList(): void;
  getInventoryItemsList(): Array<InventoryItem>;
  setInventoryItemsList(value: Array<InventoryItem>): void;
  addInventoryItems(value?: InventoryItem, index?: number): InventoryItem;

  clearBankItemsList(): void;
  getBankItemsList(): Array<InventoryItem>;
  setBankItemsList(value: Array<InventoryItem>): void;
  addBankItems(value?: InventoryItem, index?: number): InventoryItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInventoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInventoryRequest): UpdateInventoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInventoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInventoryRequest;
  static deserializeBinaryFromReader(message: UpdateInventoryRequest, reader: jspb.BinaryReader): UpdateInventoryRequest;
}

export namespace UpdateInventoryRequest {
  export type AsObject = {
    target?: CharacterTarget.AsObject,
    inventoryItemsList: Array<InventoryItem.AsObject>,
    bankItemsList: Array<InventoryItem.AsObject>,
  }
}

