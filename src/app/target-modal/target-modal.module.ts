import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TargetModalPageRoutingModule } from './target-modal-routing.module';

import { TargetModalPage } from './target-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TargetModalPageRoutingModule
  ],
  declarations: [TargetModalPage]
})
export class TargetModalPageModule {}
