import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { GedService } from '../services/ged.service';



@NgModule({
  declarations: [
    TreeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    GedService
  ],
  exports: [
    TreeComponent
  ]
})
export class TreeModule { }
