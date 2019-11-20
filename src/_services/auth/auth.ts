import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {User} from '../../_models/User';
import {Config} from '../../_config/Config';
import {Route} from '../../_routes/Route';

@Injectable()
export class AuthProvider {
  private apiUrl: string;

  constructor(
    public http: HttpClient,
    private storage: Storage
  ) {
    this.apiUrl = Config.apiUrl;
  }

  register(data) {
    return this.http
        .post(this.apiUrl + Route.register, data)
        .toPromise()
        .then((r: any) => {
          if (!r || !r.success) {
            return false;
          }

          this.storage.set('user', r.entity);
        });
  }

  login(email, password) {
    return this.http
      .post(this.apiUrl + Route.login, {
        email,
        password
      })
      .toPromise()
      .then((r: any) => {
        if (!r || !r.entity) {
          return false;
        }

        this.storage.set('user', r.entity);

        return r.user;
      });
  }
}
