import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public items: Array<{ text: string; deadline: string; points: number }> = [];

  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        text: 'Description for item ' + i,
        deadline:  i + ' ' + i + ' 2020',
        points: Math.floor(Math.random() * 23)
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
