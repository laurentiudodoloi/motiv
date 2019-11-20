import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public targets: Array<{ id: number; text: string; deadline: string; points: number }> = [];

  constructor() {
    for (let i = 1; i < 11; i++) {
      this.targets.push({
        id: i,
        text: 'Description for item ' + i,
        deadline:  i + ' ' + i + ' 2020',
        points: Math.floor(Math.random() * 23)
      });
    }
  }

  ngOnInit() {
  }

  deleteTarget(target) {
    const index = this.targets.indexOf(target);
    this.targets.splice(index, 1);
  }

  markTargetAsChecked(target) {
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
