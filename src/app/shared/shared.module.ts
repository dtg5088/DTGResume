import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
  ],
  imports: [
    MaterialModule,
    ComponentsModule,
    CommonModule,
  ],
  exports: [
    ComponentsModule,
    MaterialModule,
  ]
})
export class SharedModule { }
