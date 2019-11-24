import { Component } from '@angular/core';
import {AuthProvider} from '../../_services/auth/auth';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-my-account',
  templateUrl: 'my-account.page.html',
  styleUrls: ['my-account.page.scss'],
})
export class MyAccountPage {

  constructor(
      private authService: AuthProvider,
      private navCtrl: NavController
  ) {
    if (!this.authService.authenticated()) {
      console.log('Not authenticated.');
      // this.navCtrl.navigateRoot('login');
    }
  }
}
