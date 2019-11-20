import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Task from "../../_models/task";
import {AuthProvider} from "../auth/auth";

/*
  Generated class for the TaskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskProvider {
  private apiUrl: string;
  private tasksRoute: string;
  private createTaskRoute: string;
  private updateOrderRouter: string;
  private updateStateRoute: string;

  constructor(
    public http: HttpClient,
    private authProvider: AuthProvider
  ) {
    this.apiUrl = 'http://31.220.51.142/api/tasks';
    this.tasksRoute = '';
    this.createTaskRoute = '/create';
    this.updateOrderRouter = '/update-order';
    this.updateStateRoute = '/update-state';
  }

  getTasks() {
    return this.http
      .get(this.apiUrl + this.tasksRoute + '/' + this.authProvider.getUser().id)
      .toPromise()
      .then((r: any) => {
        if (r.entities) {
          return r.entities;
        }

        return [];
      });
  }

  create(task: Task) {
    return this.http
      .post(this.apiUrl + this.createTaskRoute, {
        user_id: task.user_id,
        description: task.description,
        order: task.order,
      })
      .toPromise()
      .then((r: any) => {
        if (r.entity) {
          return r.entity;
        }

        return false;
      });
  }

  updateState(task: Task) {
    return this.http
      .post(this.apiUrl + this.updateStateRoute, {
        task_id: task.id,
        state: task.completed
      })
      .toPromise()
      .then((r: any) => {
        if (r.entity) {
          return r.entity;
        }

        return false;
      });
  }

  updateOrders(tasks) {{
    return this.http
      .post(this.apiUrl + this.updateOrderRouter, {
        tasks: tasks.map(t => {
          return {
            id: t.id,
            order: t.order
          }
        })
      })
      .toPromise()
      .then((r: any) => {
        if (r.entity) {
          return r.entity;
        }

        return false;
      });
  }}
}
