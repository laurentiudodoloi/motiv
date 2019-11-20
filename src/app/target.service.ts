import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Storage} from '@ionic/storage';
import {Config} from '../_config/Config';
import {Route} from '../_routes/Route';

@Injectable({
  providedIn: 'root'
})
export class TargetService {
  private apiUrl: string;

  constructor(
      public http: HttpClient,
      private storage: Storage
  ) {
    this.apiUrl = Config.apiUrl;
  }

  all() {
    return this.storage
        .get('user')
        .then(r => {
          const userId = r.id;

          return this.http
              .get(this.apiUrl + Route.targets, userId)
              .toPromise()
              .then((r: any) => {
                if (!r.success) {
                  return false;
                }

                this.storage
                    .set('targets', r.entities);

                return r.entities;
              });
        });
  }

  store(data) {
    return this.http
        .post(this.apiUrl + Route.achievedTarget, data)
        .toPromise()
        .then((r: any) => {
          if (!r.success) {
            return false;
          }

          let targets = [];
          this.storage
              .get('targets')
              .then(r => {
                targets = r;
              })

          if (!targets) {
            targets = [];
          }

          const index = targets.findIndex(i => {
            return parseInt(i.id, 10) === parseInt(r.entity.id, 10);
          });

          if (index < 0) {
            return false;
          }

          targets.splice(index, 1, r.entity);

          this.storage.set('targets', targets);

          return r.entity;
        });
  }

  achieved(id: number) {
    return this.http
        .post(this.apiUrl + Route.achievedTarget, {
          id
        })
        .toPromise()
        .then((r: any) => {
          return r.success;
        });
  }

  delete(id: number) {
    return this.http
        .post(this.apiUrl + Route.deleteTarget, {
          id
        })
        .toPromise()
        .then((r: any) => {
          return r.success;
        });
  }
}
