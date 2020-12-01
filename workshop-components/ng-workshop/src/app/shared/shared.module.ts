import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsEmptyDirective } from './is-empty.directive';



@NgModule({
  declarations: [IsEmptyDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
