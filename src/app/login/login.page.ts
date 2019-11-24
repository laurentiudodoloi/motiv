import { Component, OnInit } from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';
import {AuthProvider} from '../../_services/auth/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private user: {
    email: string,
    password: string,
  };

  constructor(
      private menuCtrl: MenuController,
      private auth: AuthProvider,
      private navCtrl: NavController,
  ) {
    this.user = {
      email: '',
      password: '',
    };
  }

  ngOnInit() {
  }

  login() {
    console.log('Login', this.user);
  }

  goToRegister() {
    this.navCtrl.navigateRoot('register');
  }
}
