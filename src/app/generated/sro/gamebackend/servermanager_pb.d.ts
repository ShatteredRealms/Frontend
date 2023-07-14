// package: sro.gamebackend
// file: sro/gamebackend/servermanager.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class DimensionTarget extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  getFindbyCase(): DimensionTarget.FindbyCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DimensionTarget.AsObject;
  static toObject(includeInstance: boolean, msg: DimensionTarget): DimensionTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DimensionTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DimensionTarget;
  static deserializeBinaryFromReader(message: DimensionTarget, reader: jspb.BinaryReader): DimensionTarget;
}

export namespace DimensionTarget {
  export type AsObject = {
    id: string,
    name: string,
  }

  export enum FindbyCase {
    FINDBY_NOT_SET = 0,
    ID = 1,
    NAME = 2,
  }
}

export class MapTarget extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string;
  setId(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  getFindbyCase(): MapTarget.FindbyCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapTarget.AsObject;
  static toObject(includeInstance: boolean, msg: MapTarget): MapTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapTarget;
  static deserializeBinaryFromReader(message: MapTarget, reader: jspb.BinaryReader): MapTarget;
}

export namespace MapTarget {
  export type AsObject = {
    id: string,
    name: string,
  }

  export enum FindbyCase {
    FINDBY_NOT_SET = 0,
    ID = 1,
    NAME = 2,
  }
}

export class CreateDimensionRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  clearMapIdsList(): void;
  getMapIdsList(): Array<string>;
  setMapIdsList(value: Array<string>): void;
  addMapIds(value: string, index?: number): string;

  getLocation(): string;
  setLocation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDimensionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDimensionRequest): CreateDimensionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDimensionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDimensionRequest;
  static deserializeBinaryFromReader(message: CreateDimensionRequest, reader: jspb.BinaryReader): CreateDimensionRequest;
}

export namespace CreateDimensionRequest {
  export type AsObject = {
    name: string,
    version: string,
    mapIdsList: Array<string>,
    location: string,
  }
}

export class DuplicateDimensionRequest extends jspb.Message {
  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): DimensionTarget | undefined;
  setTarget(value?: DimensionTarget): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DuplicateDimensionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DuplicateDimensionRequest): DuplicateDimensionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DuplicateDimensionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DuplicateDimensionRequest;
  static deserializeBinaryFromReader(message: DuplicateDimensionRequest, reader: jspb.BinaryReader): DuplicateDimensionRequest;
}

export namespace DuplicateDimensionRequest {
  export type AsObject = {
    target?: DimensionTarget.AsObject,
    name: string,
  }
}

export class EditDimensionRequest extends jspb.Message {
  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): DimensionTarget | undefined;
  setTarget(value?: DimensionTarget): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): string;
  setVersion(value: string): void;

  getEditMaps(): boolean;
  setEditMaps(value: boolean): void;

  clearMapIdsList(): void;
  getMapIdsList(): Array<string>;
  setMapIdsList(value: Array<string>): void;
  addMapIds(value: string, index?: number): string;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): string;
  setLocation(value: string): void;

  getOptionalNameCase(): EditDimensionRequest.OptionalNameCase;
  getOptionalVersionCase(): EditDimensionRequest.OptionalVersionCase;
  getOptionalLocationCase(): EditDimensionRequest.OptionalLocationCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditDimensionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditDimensionRequest): EditDimensionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditDimensionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditDimensionRequest;
  static deserializeBinaryFromReader(message: EditDimensionRequest, reader: jspb.BinaryReader): EditDimensionRequest;
}

export namespace EditDimensionRequest {
  export type AsObject = {
    target?: DimensionTarget.AsObject,
    name: string,
    version: string,
    editMaps: boolean,
    mapIdsList: Array<string>,
    location: string,
  }

  export enum OptionalNameCase {
    OPTIONAL_NAME_NOT_SET = 0,
    NAME = 2,
  }

  export enum OptionalVersionCase {
    OPTIONAL_VERSION_NOT_SET = 0,
    VERSION = 3,
  }

  export enum OptionalLocationCase {
    OPTIONAL_LOCATION_NOT_SET = 0,
    LOCATION = 8,
  }
}

export class Dimension extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  clearMapsList(): void;
  getMapsList(): Array<Map>;
  setMapsList(value: Array<Map>): void;
  addMaps(value?: Map, index?: number): Map;

  getLocation(): string;
  setLocation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dimension.AsObject;
  static toObject(includeInstance: boolean, msg: Dimension): Dimension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dimension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dimension;
  static deserializeBinaryFromReader(message: Dimension, reader: jspb.BinaryReader): Dimension;
}

export namespace Dimension {
  export type AsObject = {
    id: string,
    name: string,
    version: string,
    mapsList: Array<Map.AsObject>,
    location: string,
  }
}

export class Dimensions extends jspb.Message {
  clearDimensionsList(): void;
  getDimensionsList(): Array<Dimension>;
  setDimensionsList(value: Array<Dimension>): void;
  addDimensions(value?: Dimension, index?: number): Dimension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dimensions.AsObject;
  static toObject(includeInstance: boolean, msg: Dimensions): Dimensions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dimensions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dimensions;
  static deserializeBinaryFromReader(message: Dimensions, reader: jspb.BinaryReader): Dimensions;
}

export namespace Dimensions {
  export type AsObject = {
    dimensionsList: Array<Dimension.AsObject>,
  }
}

export class CreateMapRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getMaxPlayers(): number;
  setMaxPlayers(value: number): void;

  getInstanced(): boolean;
  setInstanced(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMapRequest): CreateMapRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMapRequest;
  static deserializeBinaryFromReader(message: CreateMapRequest, reader: jspb.BinaryReader): CreateMapRequest;
}

export namespace CreateMapRequest {
  export type AsObject = {
    name: string,
    path: string,
    maxPlayers: number,
    instanced: boolean,
  }
}

export class Map extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getMaxPlayers(): number;
  setMaxPlayers(value: number): void;

  getInstanced(): boolean;
  setInstanced(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Map.AsObject;
  static toObject(includeInstance: boolean, msg: Map): Map.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Map, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Map;
  static deserializeBinaryFromReader(message: Map, reader: jspb.BinaryReader): Map;
}

export namespace Map {
  export type AsObject = {
    id: string,
    name: string,
    path: string,
    maxPlayers: number,
    instanced: boolean,
  }
}

export class EditMapRequest extends jspb.Message {
  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): MapTarget | undefined;
  setTarget(value?: MapTarget): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasPath(): boolean;
  clearPath(): void;
  getPath(): string;
  setPath(value: string): void;

  hasMaxPlayers(): boolean;
  clearMaxPlayers(): void;
  getMaxPlayers(): number;
  setMaxPlayers(value: number): void;

  hasInstanced(): boolean;
  clearInstanced(): void;
  getInstanced(): boolean;
  setInstanced(value: boolean): void;

  getOptionalNameCase(): EditMapRequest.OptionalNameCase;
  getOptionalPathCase(): EditMapRequest.OptionalPathCase;
  getOptionalMaxPlayersCase(): EditMapRequest.OptionalMaxPlayersCase;
  getOptionalInstancedCase(): EditMapRequest.OptionalInstancedCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EditMapRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EditMapRequest): EditMapRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EditMapRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EditMapRequest;
  static deserializeBinaryFromReader(message: EditMapRequest, reader: jspb.BinaryReader): EditMapRequest;
}

export namespace EditMapRequest {
  export type AsObject = {
    target?: MapTarget.AsObject,
    name: string,
    path: string,
    maxPlayers: number,
    instanced: boolean,
  }

  export enum OptionalNameCase {
    OPTIONAL_NAME_NOT_SET = 0,
    NAME = 2,
  }

  export enum OptionalPathCase {
    OPTIONAL_PATH_NOT_SET = 0,
    PATH = 3,
  }

  export enum OptionalMaxPlayersCase {
    OPTIONAL_MAX_PLAYERS_NOT_SET = 0,
    MAX_PLAYERS = 4,
  }

  export enum OptionalInstancedCase {
    OPTIONAL_INSTANCED_NOT_SET = 0,
    INSTANCED = 5,
  }
}

export class Maps extends jspb.Message {
  clearMapsList(): void;
  getMapsList(): Array<Map>;
  setMapsList(value: Array<Map>): void;
  addMaps(value?: Map, index?: number): Map;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Maps.AsObject;
  static toObject(includeInstance: boolean, msg: Maps): Maps.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Maps, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Maps;
  static deserializeBinaryFromReader(message: Maps, reader: jspb.BinaryReader): Maps;
}

export namespace Maps {
  export type AsObject = {
    mapsList: Array<Map.AsObject>,
  }
}

