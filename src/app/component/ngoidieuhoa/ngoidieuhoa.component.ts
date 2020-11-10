import { Component } from '@angular/core';

@Component({
  selector: 'app-ngoidieuhoa',
  templateUrl: 'ngoidieuhoa.component.html',
  styleUrls: ['ngoidieuhoa.component.scss'],
})

export class NgoiDieuHoaComponent {

  slGhe = [
      {gheso1: 1, gheso2: 2, gheso3: 3, gheso4: 4},
      {gheso1: 8, gheso2: 7, gheso3: 6, gheso4: 5},
      {gheso1: 9, gheso2: 10, gheso3: 11, gheso4: 12},
      {gheso1: 16, gheso2: 15, gheso3: 14, gheso4: 13},
      {gheso1: 17, gheso2: 18, gheso3: 19, gheso4: 20},
      {gheso1: 24, gheso2: 23, gheso3: 22, gheso4: 21},
      {gheso1: 25, gheso2: 26, gheso3: 27, gheso4: 28},
      {gheso1: 32, gheso2: 31, gheso3: 30, gheso4: 29},
]
  constructor() {
  }
  click(item){
    console.log(item);
    
  }
}
