// package: sro.chat
// file: sro/chat/chat.proto

var sro_chat_chat_pb = require("../../sro/chat/chat_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var sro_characters_characters_pb = require("../../sro/characters/characters_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ChatService = (function () {
  function ChatService() {}
  ChatService.serviceName = "sro.chat.ChatService";
  return ChatService;
}());

ChatService.ConnectChannel = {
  methodName: "ConnectChannel",
  service: ChatService,
  requestStream: false,
  responseStream: true,
  requestType: sro_chat_chat_pb.ChatChannelTarget,
  responseType: sro_chat_chat_pb.ChatMessage
};

ChatService.ConnectDirectMessage = {
  methodName: "ConnectDirectMessage",
  service: ChatService,
  requestStream: false,
  responseStream: true,
  requestType: sro_characters_characters_pb.CharacterTarget,
  responseType: sro_chat_chat_pb.ChatMessage
};

ChatService.SendChatMessage = {
  methodName: "SendChatMessage",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: sro_chat_chat_pb.SendChatMessageRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.SendDirectMessage = {
  methodName: "SendDirectMessage",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: sro_chat_chat_pb.SendDirectMessageRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.GetChannel = {
  methodName: "GetChannel",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: sro_chat_chat_pb.ChatChannelTarget,
  responseType: sro_chat_chat_pb.ChatChannel
};

ChatService.AllChatChannels = {
  methodName: "AllChatChannels",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: sro_chat_chat_pb.ChatChannels
};

ChatService.CreateChannel = {
  methodName: "CreateChannel",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: sro_chat_chat_pb.CreateChannelMessage,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.DeleteChannel = {
  methodName: "DeleteChannel",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: sro_chat_chat_pb.ChatChannelTarget,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.EditChannel = {
  methodName: "EditChannel",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: sro_chat_chat_pb.UpdateChatChannelRequest,
  responseType: google_protobuf_empty_pb.Empty
};

ChatService.GetAuthorizedChatChannels = {
  methodName: "GetAuthorizedChatChannels",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: sro_characters_characters_pb.CharacterTarget,
  responseType: sro_chat_chat_pb.ChatChannels
};

ChatService.UpdateUserChatChannelAuthorizations = {
  methodName: "UpdateUserChatChannelAuthorizations",
  service: ChatService,
  requestStream: false,
  responseStream: false,
  requestType: sro_chat_chat_pb.RequestChatChannelAuthChange,
  responseType: google_protobuf_empty_pb.Empty
};

exports.ChatService = ChatService;

function ChatServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ChatServiceClient.prototype.connectChannel = function connectChannel(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(ChatService.ConnectChannel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.connectDirectMessage = function connectDirectMessage(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(ChatService.ConnectDirectMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.sendChatMessage = function sendChatMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.SendChatMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.sendDirectMessage = function sendDirectMessage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.SendDirectMessage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.getChannel = function getChannel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.GetChannel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.allChatChannels = function allChatChannels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.AllChatChannels, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.createChannel = function createChannel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.CreateChannel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.deleteChannel = function deleteChannel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.DeleteChannel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.editChannel = function editChannel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.EditChannel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.getAuthorizedChatChannels = function getAuthorizedChatChannels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.GetAuthorizedChatChannels, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ChatServiceClient.prototype.updateUserChatChannelAuthorizations = function updateUserChatChannelAuthorizations(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ChatService.UpdateUserChatChannelAuthorizations, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ChatServiceClient = ChatServiceClient;

