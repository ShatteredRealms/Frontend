// package: sro.accounts
// file: authentication.proto

var authentication_pb = require("./authentication_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var AuthenticationService = (function () {
  function AuthenticationService() {}
  AuthenticationService.serviceName = "sro.accounts.AuthenticationService";
  return AuthenticationService;
}());

AuthenticationService.Register = {
  methodName: "Register",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: authentication_pb.RegisterAccountMessage,
  responseType: google_protobuf_empty_pb.Empty
};

AuthenticationService.Login = {
  methodName: "Login",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: authentication_pb.LoginMessage,
  responseType: authentication_pb.LoginResponse
};

AuthenticationService.Refresh = {
  methodName: "Refresh",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: authentication_pb.AuthToken
};

AuthenticationService.ForgotUsername = {
  methodName: "ForgotUsername",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: authentication_pb.ForgotUsernameMessage,
  responseType: google_protobuf_empty_pb.Empty
};

AuthenticationService.ForgotPassword = {
  methodName: "ForgotPassword",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: authentication_pb.ForgotPasswordMessage,
  responseType: google_protobuf_empty_pb.Empty
};

AuthenticationService.ResetPassword = {
  methodName: "ResetPassword",
  service: AuthenticationService,
  requestStream: false,
  responseStream: false,
  requestType: authentication_pb.RestPasswordMessage,
  responseType: google_protobuf_empty_pb.Empty
};

exports.AuthenticationService = AuthenticationService;

function AuthenticationServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

AuthenticationServiceClient.prototype.register = function register(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.Register, {
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

AuthenticationServiceClient.prototype.login = function login(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.Login, {
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

AuthenticationServiceClient.prototype.refresh = function refresh(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.Refresh, {
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

AuthenticationServiceClient.prototype.forgotUsername = function forgotUsername(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.ForgotUsername, {
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

AuthenticationServiceClient.prototype.forgotPassword = function forgotPassword(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.ForgotPassword, {
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

AuthenticationServiceClient.prototype.resetPassword = function resetPassword(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(AuthenticationService.ResetPassword, {
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

exports.AuthenticationServiceClient = AuthenticationServiceClient;

