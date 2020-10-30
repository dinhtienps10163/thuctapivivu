import { Component } from '@angular/core';

@Component({
  selector: 'component-khoang4',
  templateUrl: 'khoang4.component.html',
  styleUrls: ['khoang4.component.scss'],
})
export class Khoang4Component {
  
  slGhe = [
      {id: "khoang 1", gheso1: 1, gheso2: 2, gheso3: 3, gheso4: 4},
      {id: "khoang 2", gheso1: 5, gheso2: 6, gheso3: 7, gheso4: 8},
      {id: "khoang 3", gheso1: 9, gheso2: 10, gheso3: 11, gheso4: 12},
      {id: "khoang 4", gheso1: 13, gheso2: 14, gheso3: 15, gheso4: 16},
      {id: "khoang 5", gheso1: 17, gheso2: 18, gheso3: 19, gheso4: 20},
      {id: "khoang 6", gheso1: 21, gheso2: 22, gheso3: 23, gheso4: 24},
      {id: "khoang 7", gheso1: 25, gheso2: 26, gheso3: 27, gheso4: 28},
      {id: "khoang 8", gheso1: 29, gheso2: 30, gheso3: 31, gheso4: 32},
  ]
  constructor() {}

  click(item){
    console.log(item.gheso1);
    
  }
  clicks(item){
    console.log(item.gheso3);
    
  }
  clicka(item){
    console.log(item.gheso2);
    
  }
  clickd(item){
    console.log(item.gheso4);
    
  }
}
