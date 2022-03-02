import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ContactForm {
  "name": string;
  "checkAdult": boolean;
  "department": string;
  "comment": string;
}

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {

  model = {
    name: '',
    checkAdult: false,
    department: '',
    comment: ''
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm): void {

    console.log('Form values', form);

  }

}
