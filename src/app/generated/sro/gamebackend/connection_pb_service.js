// package: sro.gamebackend
// file: sro/gamebackend/connection.proto

var sro_gamebackend_connection_pb = require("../../sro/gamebackend/connection_pb");
var sro_character_character_pb = require("../../sro/character/character_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ConnectionService = (function () {
  function ConnectionService() {}
  ConnectionService.serviceName = "sro.gamebackend.ConnectionService";
  return ConnectionService;
}());

ConnectionService.ConnectGameServer = {
  methodName: "ConnectGameServer",
  service: ConnectionService,
  requestStream: false,
  responseStream: false,
  requestType: sro_character_character_pb.CharacterTarget,
  responseType: sro_gamebackend_connection_pb.ConnectGameServerResponse
};

ConnectionService.VerifyConnect = {
  methodName: "VerifyConnect",
  service: ConnectionService,
  requestStream: false,
  responseStream: false,
  requestType: sro_gamebackend_connection_pb.VerifyConnectRequest,
  responseType: sro_character_character_pb.CharacterDetails
};

ConnectionService.TransferPlayer = {
  methodName: "TransferPlayer",
  service: ConnectionService,
  requestStream: false,
  responseStream: false,
  requestType: sro_gamebackend_connection_pb.TransferPlayerRequest,
  responseType: sro_gamebackend_connection_pb.ConnectGameServerResponse
};

ConnectionService.IsPlaying = {
  methodName: "IsPlaying",
  service: ConnectionService,
  requestStream: false,
  responseStream: false,
  requestType: sro_character_character_pb.CharacterTarget,
  responseType: sro_gamebackend_connection_pb.ConnectionStatus
};

exports.ConnectionService = ConnectionService;

function ConnectionServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ConnectionServiceClient.prototype.connectGameServer = function connectGameServer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConnectionService.ConnectGameServer, {
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

ConnectionServiceClient.prototype.verifyConnect = function verifyConnect(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConnectionService.VerifyConnect, {
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

ConnectionServiceClient.prototype.transferPlayer = function transferPlayer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConnectionService.TransferPlayer, {
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

ConnectionServiceClient.prototype.isPlaying = function isPlaying(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ConnectionService.IsPlaying, {
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

exports.ConnectionServiceClient = ConnectionServiceClient;

