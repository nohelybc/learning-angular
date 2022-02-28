import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HijxComponent } from './hijx/hijx.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HijxComponent
  ],
  exports: [
    NavbarComponent,
    HijxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
