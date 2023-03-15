// package: sro.characters
// file: sro/characters/characters.proto

var sro_characters_characters_pb = require("../../sro/characters/characters_pb");
var sro_globals_pb = require("../../sro/globals_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CharactersService = (function () {
  function CharactersService() {}
  CharactersService.serviceName = "sro.characters.CharactersService";
  return CharactersService;
}());

CharactersService.GetGenders = {
  methodName: "GetGenders",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: sro_characters_characters_pb.Genders
};

CharactersService.GetRealms = {
  methodName: "GetRealms",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: sro_characters_characters_pb.Realms
};

CharactersService.GetCharacters = {
  methodName: "GetCharacters",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: sro_characters_characters_pb.CharactersResponse
};

CharactersService.GetCharacter = {
  methodName: "GetCharacter",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: sro_characters_characters_pb.CharacterTarget,
  responseType: sro_characters_characters_pb.CharacterResponse
};

CharactersService.CreateCharacter = {
  methodName: "CreateCharacter",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: sro_characters_characters_pb.CreateCharacterRequest,
  responseType: sro_characters_characters_pb.CharacterResponse
};

CharactersService.DeleteCharacter = {
  methodName: "DeleteCharacter",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: sro_characters_characters_pb.CharacterTarget,
  responseType: google_protobuf_empty_pb.Empty
};

CharactersService.GetAllCharactersForUser = {
  methodName: "GetAllCharactersForUser",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: sro_globals_pb.UserTarget,
  responseType: sro_characters_characters_pb.CharactersResponse
};

CharactersService.EditCharacter = {
  methodName: "EditCharacter",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: sro_characters_characters_pb.EditCharacterRequest,
  responseType: google_protobuf_empty_pb.Empty
};

CharactersService.AddCharacterPlayTime = {
  methodName: "AddCharacterPlayTime",
  service: CharactersService,
  requestStream: false,
  responseStream: false,
  requestType: sro_characters_characters_pb.AddPlayTimeRequest,
  responseType: sro_characters_characters_pb.PlayTimeResponse
};

exports.CharactersService = CharactersService;

function CharactersServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CharactersServiceClient.prototype.getGenders = function getGenders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharactersService.GetGenders, {
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

CharactersServiceClient.prototype.getRealms = function getRealms(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharactersService.GetRealms, {
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

CharactersServiceClient.prototype.getCharacters = function getCharacters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharactersService.GetCharacters, {
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

