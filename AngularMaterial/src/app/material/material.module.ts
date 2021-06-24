import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const items = [
  MatButtonModule,
  MatIconModule  
];

@NgModule({
  imports: [items],
  exports: [items]  
})
export class MaterialModule { }
