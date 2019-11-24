import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MyAccountPage } from './my-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyAccountPage
      },
      {
        path: 'schedule',
        component: MyAccountPage
      },
      {
        path: '',
        component: MyAccountPage
      }
    ])
  ],
  declarations: [MyAccountPage]
})
export class MyAccountPageModule {}
