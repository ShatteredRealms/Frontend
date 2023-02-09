// package: sro.chat
// file: chat.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "./google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";

export class ChatChannel extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getPublic(): boolean;
  setPublic(value: boolean): void;

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
    pb_public: boolean,
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

  getPublic(): boolean;
  setPublic(value: boolean): void;

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
    pb_public: boolean,
  }
}

export class ChannelIdMessage extends jspb.Message {
  getChannelId(): number;
  setChannelId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChannelIdMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ChannelIdMessage): ChannelIdMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChannelIdMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChannelIdMessage;
  static deserializeBinaryFromReader(message: ChannelIdMessage, reader: jspb.BinaryReader): ChannelIdMessage;
}

export namespace ChannelIdMessage {
  export type AsObject = {
    channelId: number,
  }
}

export class ChatMessage extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

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
    username: string,
  }
}

export class SendChatMessageRequest extends jspb.Message {
  getChannelId(): number;
  setChannelId(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

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
    message: string,
  }
}

export class SendDirectMessageRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

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
    username: string,
    message: string,
  }
}

export class UpdateChatChannelRequest extends jspb.Message {
  getChannelId(): number;
  setChannelId(value: number): void;

  hasName(): boolean;
  clearName(): void;
  getName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setName(value?: google_protobuf_wrappers_pb.StringValue): void;

  hasPublic(): boolean;
  clearPublic(): void;
  getPublic(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setPublic(value?: google_protobuf_wrappers_pb.BoolValue): void;

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
    name?: google_protobuf_wrappers_pb.StringValue.AsObject,
    pb_public?: google_protobuf_wrappers_pb.BoolValue.AsObject,
  }
}

