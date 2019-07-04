import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullComponent } from './full/full.component';
import { DemoMaterialModule } from '../demo-material-module';
import { RouterModule } from '@angular/router';
import { SideMenuItem } from './side-menu-item/side-menu-item';

@NgModule({
  declarations: [FullComponent],
  imports: [
    CommonModule,
    DemoMaterialModule,
    RouterModule
  ],
  exports: [
    FullComponent
  ],
  providers: [
    SideMenuItem
  ]
})
export class LayoutsModule { }
