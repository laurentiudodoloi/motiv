import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {User} from '../../_models/User';
import {Config} from '../../_config/Config';
import {Route} from '../../_routes/Route';

@Injectable()
export class AuthProvider {
    private loggedIn: boolean;
    private apiUrl: string;

    constructor(
        public http: HttpClient,
        private storage: Storage
    ) {
        this.loggedIn = false;
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
                this.loggedIn = true;

                return r.entity;
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
                this.loggedIn = true;

                return r.user;
            });
    }

    logout() {
        this.loggedIn = false;
    }

    authenticated() {
        return this.loggedIn;
    }
}
