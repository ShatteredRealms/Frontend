import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CharacterDetails, CharactersDetails, CharacterTarget, EditCharacterRequest } from 'src/app/generated/sro/character/character_pb';
import { CharacterService } from '../generated/sro/character/character_pb_service';
import { UserTarget } from '../generated/sro/globals_pb';
import { KeycloakService } from './keycloak.service';

@Injectable({
  providedIn: 'root'
})
export class ACharacterService {

  constructor(
    protected keycloak: KeycloakService,
  ) {
  }

  getCharacters(user?: string): Observable<CharactersDetails> {
    if (user == null) {
      user = this.keycloak.profile?.username
    }

    return new Observable((subscriber) => {
      const request = new UserTarget();
      request.setUsername(user!)
      grpc.invoke(CharacterService.GetAllCharactersForUser, {
        host: environment.CHARACTERS_API_BASE_URL,
        request: request,
        metadata: {
          Authorization: `Bearer ${this.keycloak.instance.token}`,
        },
        onMessage: (message: CharactersDetails): void => {
          subscriber.next(message);
        },
        onEnd: function(code: grpc.Code, message: string, trailers: grpc.Metadata): void {
          console.log('get characters for other user end:', code, message, trailers);
          if (code != grpc.Code.OK) {
            subscriber.error(message);
          }

          subscriber.complete();
        }
      });
    })
  }

  getCharacter(id: number): Observable<CharacterDetails> {
    if (id <= 0) {
      return throwError(() => {
        return new Error("invalid character id");
      });
    }

    return new Observable((subscriber) => {
      const request = new CharacterTarget();
      request.setId(id);
      grpc.invoke(CharacterService.GetCharacter, {
        host: environment.CHARACTERS_API_BASE_URL,
        request: request,
        metadata: {
          Authorization: `Bearer ${this.keycloak.instance.token}`,
        },
        onMessage: (message: CharacterDetails): void => {
          subscriber.next(message);
        },
        onEnd: function(code: grpc.Code, message: string, trailers: grpc.Metadata): void {
          console.log('get character for other user end:', code, message, trailers);
          if (code != grpc.Code.OK) {
            subscriber.error(message);
          }

          subscriber.complete();
        }
      });
    })
  }

  getAllCharacters(): Observable<CharacterDetails[]> {
    return new Observable((subscriber) => {
      grpc.invoke(CharacterService.GetCharacters, {
        host: environment.CHARACTERS_API_BASE_URL,
        request: new Empty(),
        metadata: {
          Authorization: `Bearer ${this.keycloak.instance.token}`,
        },
        onMessage: (message: CharactersDetails): void => {
          subscriber.next(message.getCharactersList());
        },
        onEnd: function(code: grpc.Code, message: string, trailers: grpc.Metadata): void {
          console.log('get all characters end:', code, message, trailers);
          if (code != grpc.Code.OK) {
            subscriber.error(message);
          }

          subscriber.complete();
        }
      });
    });
  }

  deleteCharacter(id: number): Observable<any> {
    const request = new CharacterTarget();
    request.setId(id);
    return new Observable((subscriber) => {
      grpc.invoke(CharacterService.DeleteCharacter, {
        host: environment.CHARACTERS_API_BASE_URL,
        request: request,
        metadata: {
          Authorization: `Bearer ${this.keycloak.instance.token}`,
        },
        onMessage: (message: Empty): void => {
          subscriber.next(message);
        },
        onEnd: function(code: grpc.Code, message: string, trailers: grpc.Metadata): void {
          console.log('get characters for other user end:', code, message, trailers);
          if (code != grpc.Code.OK) {
            subscriber.error(message);
          }

          subscriber.complete();
        }
      })
    });
  }

  updateCharacter(characterId: number, newName: string | null, newOwnerId: string | null): Observable<any> {
    const request = new EditCharacterRequest();
    const target = new CharacterTarget();
    target.setId(characterId);
    request.setTarget(target);
    if (newName != null && newName != "") request.setNewName(newName);
    if (newOwnerId != null && newOwnerId != "") request.setOwnerId(newOwnerId);

    return new Observable((subscriber) => {
      grpc.invoke(CharacterService.EditCharacter, {
        host: environment.CHARACTERS_API_BASE_URL,
        request: request,
        metadata: {
          Authorization: `Bearer ${this.keycloak.instance.token}`,
        },
        onMessage: (message: Empty): void => {
          subscriber.next(message);
        },
        onEnd: function(code: grpc.Code, message: string, trailers: grpc.Metadata): void {
          console.log('update characters for other user end:', code, message, trailers);
          if (code != grpc.Code.OK) {
            subscriber.error(message);
          }

          subscriber.complete();
        },
      });
    });
  }
}
