import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import {TargetModalPage} from '../target-modal/target-modal.page';
import {TargetModalPageModule} from '../target-modal/target-modal.module';

@NgModule({
  imports: [
    TargetModalPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ])
  ],
  declarations: [ListPage],
  entryComponents: [TargetModalPage]
})
export class ListPageModule {}
