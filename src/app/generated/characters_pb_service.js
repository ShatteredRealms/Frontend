// package: sro.characters
// file: characters.proto

var characters_pb = require("./characters_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CharactersService = (function () {
  function CharactersService() {}
  CharactersService.serviceName = "sro.characters.CharactersService";
  return CharactersService;
}());

CharactersService.GetAllGenders = {
  methodName: "GetAllGenders",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: characters_pb.Genders
};

CharactersService.GetAllRealms = {
  methodName: "GetAllRealms",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: characters_pb.Realms
};

CharactersService.GetAllCharacters = {
  methodName: "GetAllCharacters",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: characters_pb.Characters
};

CharactersService.GetAllCharactersForUser = {
  methodName: "GetAllCharactersForUser",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: characters_pb.UserTarget,
  responseType: characters_pb.Characters
};

CharactersService.GetCharacter = {
  methodName: "GetCharacter",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: characters_pb.CharacterTarget,
  responseType: characters_pb.Character
};

CharactersService.CreateCharacter = {
  methodName: "CreateCharacter",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: characters_pb.CreateCharacterRequest,
  responseType: characters_pb.Character
};

CharactersService.DeleteCharacter = {
  methodName: "DeleteCharacter",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: characters_pb.Character,
  responseType: google_protobuf_empty_pb.Empty
};

CharactersService.EditCharacter = {
  methodName: "EditCharacter",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: characters_pb.Character,
  responseType: characters_pb.Character
};

CharactersService.AddCharacterPlayTime = {
  methodName: "AddCharacterPlayTime",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: characters_pb.PlayTimeMessage,
  responseType: characters_pb.PlayTimeMessage
};

exports.CharactersService = CharactersService;

function CharactersServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CharactersServiceClient.prototype.getAllGenders = function getAllGenders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharactersService.GetAllGenders, {
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

CharactersServiceClient.prototype.getAllRealms = function getAllRealms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharactersService.GetAllRealms, {
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

CharactersServiceClient.prototype.getAllCharacters = function getAllCharacters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharactersService.GetAllCharacters, {
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

CharactersServiceClient.prototype.getAllCharactersForUser = function getAllCharactersForUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharactersService.GetAllCharactersForUser, {
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

CharactersServiceClient.prototype.getCharacter = function getCharacter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharactersService.GetCharacter, {
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

CharactersServiceClient.prototype.createCharacter = function createCharacter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharactersService.CreateCharacter, {
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

CharactersServiceClient.prototype.deleteCharacter = function deleteCharacter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharactersService.DeleteCharacter, {
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

CharactersServiceClient.prototype.editCharacter = function editCharacter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharactersService.EditCharacter, {
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

CharactersServiceClient.prototype.addCharacterPlayTime = function addCharacterPlayTime(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharactersService.AddCharacterPlayTime, {
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

exports.CharactersServiceClient = CharactersServiceClient;

