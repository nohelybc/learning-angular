import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactReactiveComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ComponentsModule { }
