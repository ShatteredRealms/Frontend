// package: sro.gamebackend
// file: sro/gamebackend/servermanager.proto

var sro_gamebackend_servermanager_pb = require("../../sro/gamebackend/servermanager_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ServerManagerService = (function () {
  function ServerManagerService() {}
  ServerManagerService.serviceName = "sro.gamebackend.ServerManagerService";
  return ServerManagerService;
}());

ServerManagerService.CreateDimension = {
  methodName: "CreateDimension",
  service: ServerManagerService,
  requestStream: false,
  responseStream: false,
  requestType: sro_gamebackend_servermanager_pb.CreateDimensionRequest,
  responseType: sro_gamebackend_servermanager_pb.Dimension
};

ServerManagerService.DuplicateDimension = {
  methodName: "DuplicateDimension",
  service: ServerManagerService,
  requestStream: false,
  responseStream: false,
  requestType: sro_gamebackend_servermanager_pb.DuplicateDimensionRequest,
  responseType: sro_gamebackend_servermanager_pb.Dimension
};

ServerManagerService.GetDimension = {
  methodName: "GetDimension",
  service: ServerManagerService,
  requestStream: false,
  responseStream: false,
  requestType: sro_gamebackend_servermanager_pb.DimensionTarget,
  responseType: sro_gamebackend_servermanager_pb.Dimension
};

ServerManagerService.GetAllDimension = {
  methodName: "GetAllDimension",
  service: ServerManagerService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: sro_gamebackend_servermanager_pb.Dimensions
};

ServerManagerService.EditDimension = {
  methodName: "EditDimension",
  service: ServerManagerService,
  requestStream: false,
  responseStream: false,
  requestType: sro_gamebackend_servermanager_pb.EditDimensionRequest,
  responseType: sro_gamebackend_servermanager_pb.Dimension
};

ServerManagerService.DeleteDimension = {
  methodName: "DeleteDimension",
  service: ServerManagerService,
  requestStream: false,
  responseStream: false,
  requestType: sro_gamebackend_servermanager_pb.DimensionTarget,
  responseType: google_protobuf_empty_pb.Empty
};

ServerManagerService.CreateMap = {
  methodName: "CreateMap",
  service: ServerManagerService,
  requestStream: false,
  responseStream: false,
  requestType: sro_gamebackend_servermanager_pb.CreateMapRequest,
  responseType: sro_gamebackend_servermanager_pb.Map
};

ServerManagerService.GetMap = {
  methodName: "GetMap",
  service: ServerManagerService,
  requestStream: false,
  responseStream: false,
  requestType: sro_gamebackend_servermanager_pb.MapTarget,
  responseType: sro_gamebackend_servermanager_pb.Map
};

ServerManagerService.GetAllMaps = {
  methodName: "GetAllMaps",
  service: ServerManagerService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: sro_gamebackend_servermanager_pb.Maps
};

ServerManagerService.EditMap = {
  methodName: "EditMap",
  service: ServerManagerService,
  requestStream: false,
  responseStream: false,
  requestType: sro_gamebackend_servermanager_pb.EditMapRequest,
  responseType: sro_gamebackend_servermanager_pb.Map
};

ServerManagerService.DeleteMap = {
  methodName: "DeleteMap",
  service: ServerManagerService,
  requestStream: false,
  responseStream: false,
  requestType: sro_gamebackend_servermanager_pb.MapTarget,
  responseType: google_protobuf_empty_pb.Empty
};

exports.ServerManagerService = ServerManagerService;

function ServerManagerServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ServerManagerServiceClient.prototype.createDimension = function createDimension(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServerManagerService.CreateDimension, {
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

ServerManagerServiceClient.prototype.duplicateDimension = function duplicateDimension(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServerManagerService.DuplicateDimension, {
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

ServerManagerServiceClient.prototype.getDimension = function getDimension(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServerManagerService.GetDimension, {
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

ServerManagerServiceClient.prototype.getAllDimension = function getAllDimension(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServerManagerService.GetAllDimension, {
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

ServerManagerServiceClient.prototype.editDimension = function editDimension(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServerManagerService.EditDimension, {
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

ServerManagerServiceClient.prototype.deleteDimension = function deleteDimension(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServerManagerService.DeleteDimension, {
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

ServerManagerServiceClient.prototype.createMap = function createMap(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServerManagerService.CreateMap, {
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

ServerManagerServiceClient.prototype.getMap = function getMap(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServerManagerService.GetMap, {
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

ServerManagerServiceClient.prototype.getAllMaps = function getAllMaps(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServerManagerService.GetAllMaps, {
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

ServerManagerServiceClient.prototype.editMap = function editMap(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServerManagerService.EditMap, {
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

ServerManagerServiceClient.prototype.deleteMap = function deleteMap(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ServerManagerService.DeleteMap, {
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

exports.ServerManagerServiceClient = ServerManagerServiceClient;

