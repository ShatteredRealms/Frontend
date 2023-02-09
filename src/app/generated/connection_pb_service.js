// package: sro.gamebackend
// file: connection.proto

var connection_pb = require("./connection_pb");
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
  requestType: connection_pb.ConnectGameServerRequest,
  responseType: connection_pb.ConnectGameServerResponse
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

exports.ConnectionServiceClient = ConnectionServiceClient;

