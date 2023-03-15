// package: sro.chat
// file: sro/chat/chat.proto

import * as sro_chat_chat_pb from "../../sro/chat/chat_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as sro_characters_characters_pb from "../../sro/characters/characters_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ChatServiceConnectChannel = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof sro_chat_chat_pb.ChatChannelTarget;
  readonly responseType: typeof sro_chat_chat_pb.ChatMessage;
};

type ChatServiceConnectDirectMessage = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof sro_characters_characters_pb.CharacterTarget;
  readonly responseType: typeof sro_chat_chat_pb.ChatMessage;
};

type ChatServiceSendChatMessage = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_chat_chat_pb.SendChatMessageRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceSendDirectMessage = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_chat_chat_pb.SendDirectMessageRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceGetChannel = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_chat_chat_pb.ChatChannelTarget;
  readonly responseType: typeof sro_chat_chat_pb.ChatChannel;
};

type ChatServiceAllChatChannels = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof sro_chat_chat_pb.ChatChannels;
};

type ChatServiceCreateChannel = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_chat_chat_pb.CreateChannelMessage;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceDeleteChannel = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_chat_chat_pb.ChatChannelTarget;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceEditChannel = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_chat_chat_pb.UpdateChatChannelRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ChatServiceGetAuthorizedChatChannels = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_characters_characters_pb.CharacterTarget;
  readonly responseType: typeof sro_chat_chat_pb.ChatChannels;
};

type ChatServiceUpdateUserChatChannelAuthorizations = {
  readonly methodName: string;
  readonly service: typeof ChatService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof sro_chat_chat_pb.RequestChatChannelAuthChange;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class ChatService {
  static readonly serviceName: string;
  static readonly ConnectChannel: ChatServiceConnectChannel;
  static readonly ConnectDirectMessage: ChatServiceConnectDirectMessage;
  static readonly SendChatMessage: ChatServiceSendChatMessage;
  static readonly SendDirectMessage: ChatServiceSendDirectMessage;
  static readonly GetChannel: ChatServiceGetChannel;
  static readonly AllChatChannels: ChatServiceAllChatChannels;
  static readonly CreateChannel: ChatServiceCreateChannel;
  static readonly DeleteChannel: ChatServiceDeleteChannel;
  static readonly EditChannel: ChatServiceEditChannel;
  static readonly GetAuthorizedChatChannels: ChatServiceGetAuthorizedChatChannels;
  static readonly UpdateUserChatChannelAuthorizations: ChatServiceUpdateUserChatChannelAuthorizations;
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

export class ChatServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  connectChannel(requestMessage: sro_chat_chat_pb.ChatChannelTarget, metadata?: grpc.Metadata): ResponseStream<sro_chat_chat_pb.ChatMessage>;
  connectDirectMessage(requestMessage: sro_characters_characters_pb.CharacterTarget, metadata?: grpc.Metadata): ResponseStream<sro_chat_chat_pb.ChatMessage>;
  sendChatMessage(
    requestMessage: sro_chat_chat_pb.SendChatMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  sendChatMessage(
    requestMessage: sro_chat_chat_pb.SendChatMessageRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  sendDirectMessage(
    requestMessage: sro_chat_chat_pb.SendDirectMessageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  sendDirectMessage(
    requestMessage: sro_chat_chat_pb.SendDirectMessageRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getChannel(
    requestMessage: sro_chat_chat_pb.ChatChannelTarget,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_chat_chat_pb.ChatChannel|null) => void
  ): UnaryResponse;
  getChannel(
    requestMessage: sro_chat_chat_pb.ChatChannelTarget,
    callback: (error: ServiceError|null, responseMessage: sro_chat_chat_pb.ChatChannel|null) => void
  ): UnaryResponse;
  allChatChannels(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_chat_chat_pb.ChatChannels|null) => void
  ): UnaryResponse;
  allChatChannels(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError|null, responseMessage: sro_chat_chat_pb.ChatChannels|null) => void
  ): UnaryResponse;
  createChannel(
    requestMessage: sro_chat_chat_pb.CreateChannelMessage,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  createChannel(
    requestMessage: sro_chat_chat_pb.CreateChannelMessage,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteChannel(
    requestMessage: sro_chat_chat_pb.ChatChannelTarget,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  deleteChannel(
    requestMessage: sro_chat_chat_pb.ChatChannelTarget,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  editChannel(
    requestMessage: sro_chat_chat_pb.UpdateChatChannelRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  editChannel(
    requestMessage: sro_chat_chat_pb.UpdateChatChannelRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  getAuthorizedChatChannels(
    requestMessage: sro_characters_characters_pb.CharacterTarget,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: sro_chat_chat_pb.ChatChannels|null) => void
  ): UnaryResponse;
  getAuthorizedChatChannels(
    requestMessage: sro_characters_characters_pb.CharacterTarget,
    callback: (error: ServiceError|null, responseMessage: sro_chat_chat_pb.ChatChannels|null) => void
  ): UnaryResponse;
  updateUserChatChannelAuthorizations(
    requestMessage: sro_chat_chat_pb.RequestChatChannelAuthChange,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  updateUserChatChannelAuthorizations(
    requestMessage: sro_chat_chat_pb.RequestChatChannelAuthChange,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

