// package: sro.chat
// file: sro/chat/chat.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as sro_characters_characters_pb from "../../sro/characters/characters_pb";

export class RequestChatChannelAuthChange extends jspb.Message {
  hasCharacter(): boolean;
  clearCharacter(): void;
  getCharacter(): sro_characters_characters_pb.CharacterTarget | undefined;
  setCharacter(value?: sro_characters_characters_pb.CharacterTarget): void;

  getAdd(): boolean;
  setAdd(value: boolean): void;

  clearIdsList(): void;
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): void;
  addIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestChatChannelAuthChange.AsObject;
  static toObject(includeInstance: boolean, msg: RequestChatChannelAuthChange): RequestChatChannelAuthChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestChatChannelAuthChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestChatChannelAuthChange;
  static deserializeBinaryFromReader(message: RequestChatChannelAuthChange, reader: jspb.BinaryReader): RequestChatChannelAuthChange;
}

export namespace RequestChatChannelAuthChange {
  export type AsObject = {
    character?: sro_characters_characters_pb.CharacterTarget.AsObject,
    add: boolean,
    idsList: Array<number>,
  }
}

export class ChatChannel extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDimension(): string;
  setDimension(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatChannel.AsObject;
  static toObject(includeInstance: boolean, msg: ChatChannel): ChatChannel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatChannel;
  static deserializeBinaryFromReader(message: ChatChannel, reader: jspb.BinaryReader): ChatChannel;
}

export namespace ChatChannel {
  export type AsObject = {
    id: number,
    name: string,
    dimension: string,
  }
}

export class ChatChannels extends jspb.Message {
  clearChannelsList(): void;
  getChannelsList(): Array<ChatChannel>;
  setChannelsList(value: Array<ChatChannel>): void;
  addChannels(value?: ChatChannel, index?: number): ChatChannel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatChannels.AsObject;
  static toObject(includeInstance: boolean, msg: ChatChannels): ChatChannels.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatChannels, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatChannels;
  static deserializeBinaryFromReader(message: ChatChannels, reader: jspb.BinaryReader): ChatChannels;
}

export namespace ChatChannels {
  export type AsObject = {
    channelsList: Array<ChatChannel.AsObject>,
  }
}

export class CreateChannelMessage extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDimension(): string;
  setDimension(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChannelMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChannelMessage): CreateChannelMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateChannelMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChannelMessage;
  static deserializeBinaryFromReader(message: CreateChannelMessage, reader: jspb.BinaryReader): CreateChannelMessage;
}

export namespace CreateChannelMessage {
  export type AsObject = {
    name: string,
    dimension: string,
  }
}

export class ChatChannelTarget extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatChannelTarget.AsObject;
  static toObject(includeInstance: boolean, msg: ChatChannelTarget): ChatChannelTarget.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatChannelTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatChannelTarget;
  static deserializeBinaryFromReader(message: ChatChannelTarget, reader: jspb.BinaryReader): ChatChannelTarget;
}

export namespace ChatChannelTarget {
  export type AsObject = {
    id: number,
  }
}

export class ChatMessage extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getCharacterName(): string;
  setCharacterName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessage;
  static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;
}

export namespace ChatMessage {
  export type AsObject = {
    message: string,
    characterName: string,
  }
}

export class SendChatMessageRequest extends jspb.Message {
  getChannelId(): number;
  setChannelId(value: number): void;

  hasChatMessage(): boolean;
  clearChatMessage(): void;
  getChatMessage(): ChatMessage | undefined;
  setChatMessage(value?: ChatMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendChatMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendChatMessageRequest): SendChatMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendChatMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendChatMessageRequest;
  static deserializeBinaryFromReader(message: SendChatMessageRequest, reader: jspb.BinaryReader): SendChatMessageRequest;
}

export namespace SendChatMessageRequest {
  export type AsObject = {
    channelId: number,
    chatMessage?: ChatMessage.AsObject,
  }
}

export class SendDirectMessageRequest extends jspb.Message {
  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): sro_characters_characters_pb.CharacterTarget | undefined;
  setTarget(value?: sro_characters_characters_pb.CharacterTarget): void;

  hasChatMessage(): boolean;
  clearChatMessage(): void;
  getChatMessage(): ChatMessage | undefined;
  setChatMessage(value?: ChatMessage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendDirectMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendDirectMessageRequest): SendDirectMessageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendDirectMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendDirectMessageRequest;
  static deserializeBinaryFromReader(message: SendDirectMessageRequest, reader: jspb.BinaryReader): SendDirectMessageRequest;
}

export namespace SendDirectMessageRequest {
  export type AsObject = {
    target?: sro_characters_characters_pb.CharacterTarget.AsObject,
    chatMessage?: ChatMessage.AsObject,
  }
}

export class UpdateChatChannelRequest extends jspb.Message {
  getChannelId(): number;
  setChannelId(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasDimension(): boolean;
  clearDimension(): void;
  getDimension(): string;
  setDimension(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChatChannelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChatChannelRequest): UpdateChatChannelRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateChatChannelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChatChannelRequest;
  static deserializeBinaryFromReader(message: UpdateChatChannelRequest, reader: jspb.BinaryReader): UpdateChatChannelRequest;
}

export namespace UpdateChatChannelRequest {
  export type AsObject = {
    channelId: number,
    name: string,
    dimension: string,
  }
}

