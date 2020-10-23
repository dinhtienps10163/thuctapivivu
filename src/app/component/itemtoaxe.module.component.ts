import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ItemToaXeComponent } from './itemtoaxe.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
        {path: "", 
        component: ItemToaXeComponent}
      ]),
  ],
  declarations: [ItemToaXeComponent]
})
export class ItemToaXeComponentModule {}
