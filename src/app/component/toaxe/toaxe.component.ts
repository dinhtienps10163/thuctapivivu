import { Component } from '@angular/core';

@Component({
  selector: 'component-seat',
  template: `<div *ngFor="let item of data">
  <ion-icon slot="start" name="square-outline" style="font-size: 32px; display: inline-table; background-color: #ecf0f5;"></ion-icon>
  <ion-title style="font-size: 14px; margin-top: -29px; margin-left: -8px;">{{item.id}}</ion-title>
    </div>`,
  styleUrls: ['toaxe.component.scss'],
})
export class ToaXeComponent {
  data = [
    {id: 12},
    {id: 22},
    {id: 23},
    {id: 24},
    {id: 25},
    {id: 26},
    {id: 27},
    {id: 28},
    {id: 29},
    {id: 10},
    {id: 11},
    {id: 12},
    {id: 13},
    {id: 14},
    {id: 15},
    {id: 16},
    {id: 17},
    {id: 18},
    {id: 19},
    {id: 20},
  ]
  constructor() {}

}
