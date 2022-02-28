import { Injectable, EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  nombreEvent = new EventEmitter<string>();

  constructor() { }
}
