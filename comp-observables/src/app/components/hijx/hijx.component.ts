import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijx',
  templateUrl: './hijx.component.html',
  styleUrls: ['./hijx.component.css']
})
export class HijxComponent implements OnInit, OnDestroy {

  mensaje: string = 'Mensaje!!';

  nombreSubs: Subscription;

  nombre: string = 'Nohely';
  
  constructor( public dataService: DataService) { }

  ngOnInit() {
    // this.dataService.nombreEvent.subscribe( texto =>{
    //   console.log('hijo:', texto);
    //   this.mensaje = texto;});
    // this.dataService.nombreEvent.emit('Jelou(hijx)!');
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy del hijx')
    // this.nombreSubs.unsubscribe();
  }

}
