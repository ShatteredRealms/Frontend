import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CharacterResponse, CharactersResponse, CharacterTarget } from '../generated/sro/characters/characters_pb';
import { CharactersService } from '../generated/sro/characters/characters_pb_service';
import { UserTarget } from '../generated/sro/globals_pb';
import { KeycloakService } from './keycloak.service';

@Injectable({
  providedIn: 'root'
})
export class ACharactersService {

  constructor(
    protected keycloak: KeycloakService,
  ) {
  }

  getCharacters(user?: string): Observable<CharactersResponse> {
    if (user == null) {
      user = this.keycloak.profile?.username
    }

    return new Observable((subscriber) => {
      const request = new UserTarget();
      request.setUsername(user!)
      grpc.invoke(CharactersService.GetAllCharactersForUser, {
        host: environment.CHARACTERS_API_BASE_URL,
        request: request,
        metadata: {
          Authorization: `Bearer ${this.keycloak.instance.token}`,
        },
        onMessage: (message: CharactersResponse): void => {
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

  getAllCharacters(): Observable<CharacterResponse[]> {
    return new Observable((subscriber) => {
      grpc.invoke(CharactersService.GetCharacters, {
        host: environment.CHARACTERS_API_BASE_URL,
        request: new Empty(),
        metadata: {
          Authorization: `Bearer ${this.keycloak.instance.token}`,
        },
        onMessage: (message: CharactersResponse): void => {
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
      grpc.invoke(CharactersService.DeleteCharacter, {
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
}
