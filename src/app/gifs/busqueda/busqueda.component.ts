import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {


  // captura el valor ingresado en el input deacuerdo a la referencia -- se obtiene la referencia del objeto
  // se obtiene el valor ingresado en la referencia txtBuscarReferencia y se asigna a la variable txtBuscar
  @ViewChild('txtBuscarReferencia') txtBuscar!:ElementRef<HTMLInputElement>;


  constructor( private _gifsService: GifsService){

  }



  buscar(){

    // se asigna el valor obtenido de txtBuscar a la variable valor
    const valor = this.txtBuscar.nativeElement.value;

    // condicion para que no agregue valores vacios 
    if(valor.trim().length === 0){
      return;
    }

    // enviar valor ingresado al metodo buscarGifs
    this._gifsService.buscarGifs(valor);


    this.txtBuscar.nativeElement.value = '';


    
  }

}
