// package: sro.character
// file: sro/character/character.proto

var sro_character_character_pb = require("../../sro/character/character_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var sro_globals_pb = require("../../sro/globals_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CharacterService = (function () {
  function CharacterService() {}
  CharacterService.serviceName = "sro.character.CharacterService";
  return CharacterService;
}());

CharacterService.GetCharacters = {
  methodName: "GetCharacters",
  service: CharacterService,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: sro_character_character_pb.CharactersDetails
};

CharacterService.GetCharacter = {
  methodName: "GetCharacter",
  service: CharacterService,
  requestStream: false,
  responseStream: false,
  requestType: sro_character_character_pb.CharacterTarget,
  responseType: sro_character_character_pb.CharacterDetails
};

CharacterService.CreateCharacter = {
  methodName: "CreateCharacter",
  service: CharacterService,
  requestStream: false,
  responseStream: false,
  requestType: sro_character_character_pb.CreateCharacterRequest,
  responseType: sro_character_character_pb.CharacterDetails
};

CharacterService.DeleteCharacter = {
  methodName: "DeleteCharacter",
  service: CharacterService,
  requestStream: false,
  responseStream: false,
  requestType: sro_character_character_pb.CharacterTarget,
  responseType: google_protobuf_empty_pb.Empty
};

CharacterService.GetAllCharactersForUser = {
  methodName: "GetAllCharactersForUser",
  service: CharacterService,
  requestStream: false,
  responseStream: false,
  requestType: sro_globals_pb.UserTarget,
  responseType: sro_character_character_pb.CharactersDetails
};

CharacterService.EditCharacter = {
  methodName: "EditCharacter",
  service: CharacterService,
  requestStream: false,
  responseStream: false,
  requestType: sro_character_character_pb.EditCharacterRequest,
  responseType: google_protobuf_empty_pb.Empty
};

CharacterService.AddCharacterPlayTime = {
  methodName: "AddCharacterPlayTime",
  service: CharacterService,
  requestStream: false,
  responseStream: false,
  requestType: sro_character_character_pb.AddPlayTimeRequest,
  responseType: sro_character_character_pb.PlayTimeResponse
};

CharacterService.GetInventory = {
  methodName: "GetInventory",
  service: CharacterService,
  requestStream: false,
  responseStream: false,
  requestType: sro_character_character_pb.CharacterTarget,
  responseType: sro_character_character_pb.Inventory
};

CharacterService.SetInventory = {
  methodName: "SetInventory",
  service: CharacterService,
  requestStream: false,
  responseStream: false,
  requestType: sro_character_character_pb.UpdateInventoryRequest,
  responseType: google_protobuf_empty_pb.Empty
};

exports.CharacterService = CharacterService;

function CharacterServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CharacterServiceClient.prototype.getCharacters = function getCharacters(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharacterService.GetCharacters, {
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

CharacterServiceClient.prototype.getCharacter = function getCharacter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharacterService.GetCharacter, {
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

CharacterServiceClient.prototype.createCharacter = function createCharacter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharacterService.CreateCharacter, {
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

CharacterServiceClient.prototype.deleteCharacter = function deleteCharacter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharacterService.DeleteCharacter, {
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

CharacterServiceClient.prototype.getAllCharactersForUser = function getAllCharactersForUser(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharacterService.GetAllCharactersForUser, {
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

CharacterServiceClient.prototype.editCharacter = function editCharacter(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharacterService.EditCharacter, {
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

CharacterServiceClient.prototype.addCharacterPlayTime = function addCharacterPlayTime(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharacterService.AddCharacterPlayTime, {
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

CharacterServiceClient.prototype.getInventory = function getInventory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharacterService.GetInventory, {
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

CharacterServiceClient.prototype.setInventory = function setInventory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CharacterService.SetInventory, {
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

exports.CharacterServiceClient = CharacterServiceClient;

