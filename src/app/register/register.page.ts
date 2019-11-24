import { Component, OnInit } from '@angular/core';
import {MenuController, NavController} from '@ionic/angular';
import {AuthProvider} from '../../_services/auth/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  private user: {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    confirm_password: string,
  };

  constructor(
      private menuCtrl: MenuController,
      private auth: AuthProvider,
      private navCtrl: NavController,
  ) {
    this.user = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
    };
  }

  ngOnInit() {
  }

  register() {
    console.log('Register', this.user);
  }

  goToLogin() {
    this.navCtrl.navigateRoot('login');
  }
}
