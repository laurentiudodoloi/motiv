import { Component, OnInit } from '@angular/core';
import {TargetService} from '../../_services/target/target.service';
// @ts-ignore
import moment from 'moment';
import {AuthProvider} from '../../_services/auth/auth';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-target-modal',
  templateUrl: './target-modal.page.html',
  styleUrls: ['./target-modal.page.scss'],
})
export class TargetModalPage implements OnInit {
  public target: {
    text: string,
    priority: number | boolean,
    hasDeadline: boolean,
    deadline: string | null,
    achieved: boolean,
  };

  constructor(
      private targetService: TargetService,
      private storage: Storage
  ) {
    this.target = {
      text: '',
      priority: false,
      hasDeadline: false,
      deadline: null,
      achieved: false,
    };
  }

  ngOnInit() {
    //
  }

  save() {
    this.storage
        .get('user')
        .then(user => {
          if (!user) {
            return false;
          }

          this.targetService
              .store({
                user_id: user.id,
                text: this.target.text,
                deadline: this.target.hasDeadline ? moment(this.target.deadline).format('D/MM/YYYY') : null,
                priority: this.target.priority,
              })
              .then(result => {
                console.log('Result', result);
              });
        });
  }
}
