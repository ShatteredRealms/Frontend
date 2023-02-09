// package: sro.accounts
// file: authorization.proto

var authorization_pb = require("./authorization_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AuthorizationService = (function () {
  function AuthorizationService() {}
  AuthorizationService.serviceName = "sro.accounts.AuthorizationService";
  return AuthorizationService;
}());

AuthorizationService.GetAuthorization = {
  methodName: "GetAuthorization",
  service: AuthorizationService,
  requestStream: false,
  responseStream: false,
  requestType: authorization_pb.IDMessage,
  responseType: authorization_pb.AuthorizationMessage
};

AuthorizationService.AddAuthorization = {
  methodName: "AddAuthorization",
  service: AuthorizationService,
  requestStream: false,
  responseStream: false,
  requestType: authorization_pb.AuthorizationMessage,
  responseType: google_protobuf_empty_pb.Empty
};

AuthorizationService.RemoveAuthorization = {
  methodName: "RemoveAuthorization",
  service: AuthorizationService,
  requestStream: false,
  responseStream: false,
  requestType: authorization_pb.AuthorizationMessage,
  responseType: google_protobuf_empty_pb.Empty
};

AuthorizationService.GetRoles = {
  methodName: "GetRoles",
  service: AuthorizationService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: authorization_pb.UserRoles
};

AuthorizationService.GetRole = {
  methodName: "GetRole",
  service: AuthorizationService,
  requestStream: false,
  responseStream: false,
  requestType: authorization_pb.IDMessage,
  responseType: authorization_pb.UserRole
};

AuthorizationService.CreateRole = {
  methodName: "CreateRole",
  service: AuthorizationService,
  requestStream: false,
  responseStream: false,
  requestType: authorization_pb.UserRole,
  responseType: google_protobuf_empty_pb.Empty
};

AuthorizationService.EditRole = {
  methodName: "EditRole",
  service: AuthorizationService,
  requestStream: false,
  responseStream: false,
  requestType: authorization_pb.UserRole,
  responseType: google_protobuf_empty_pb.Empty
};

AuthorizationService.DeleteRole = {
  methodName: "DeleteRole",
  service: AuthorizationService,
  requestStream: false,
  responseStream: false,
  requestType: authorization_pb.UserRole,
  responseType: google_protobuf_empty_pb.Empty
};

AuthorizationService.GetAllPermissions = {
  methodName: "GetAllPermissions",
  service: AuthorizationService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: authorization_pb.UserPermissions
};

AuthorizationService.SubscribeUserUpdates = {
  methodName: "SubscribeUserUpdates",
  service: AuthorizationService,
  requestStream: false,
  responseStream: true,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: authorization_pb.IDMessage
};

AuthorizationService.SubscribeRoleUpdates = {
  methodName: "SubscribeRoleUpdates",
  service: AuthorizationService,
  requestStream: false,
  responseStream: true,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: authorization_pb.IDMessage
};

exports.AuthorizationService = AuthorizationService;

function AuthorizationServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthorizationServiceClient.prototype.getAuthorization = function getAuthorization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthorizationService.GetAuthorization, {
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

AuthorizationServiceClient.prototype.addAuthorization = function addAuthorization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthorizationService.AddAuthorization, {
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

AuthorizationServiceClient.prototype.removeAuthorization = function removeAuthorization(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthorizationService.RemoveAuthorization, {
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

AuthorizationServiceClient.prototype.getRoles = function getRoles(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthorizationService.GetRoles, {
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

AuthorizationServiceClient.prototype.getRole = function getRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthorizationService.GetRole, {
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

AuthorizationServiceClient.prototype.createRole = function createRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthorizationService.CreateRole, {
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

AuthorizationServiceClient.prototype.editRole = function editRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthorizationService.EditRole, {
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

AuthorizationServiceClient.prototype.deleteRole = function deleteRole(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthorizationService.DeleteRole, {
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

AuthorizationServiceClient.prototype.getAllPermissions = function getAllPermissions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthorizationService.GetAllPermissions, {
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

AuthorizationServiceClient.prototype.subscribeUserUpdates = function subscribeUserUpdates(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(AuthorizationService.SubscribeUserUpdates, {
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

AuthorizationServiceClient.prototype.subscribeRoleUpdates = function subscribeRoleUpdates(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(AuthorizationService.SubscribeRoleUpdates, {
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

exports.AuthorizationServiceClient = AuthorizationServiceClient;

