import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {



  @ViewChild('txtBuscarReferencia') txtBuscar!:ElementRef<HTMLInputElement>;


  dato='';



  buscar(){

    const valor = this.txtBuscar.nativeElement.value;

    console.log(valor);

    this.dato= valor;

    console.log(this.dato);

    this.txtBuscar.nativeElement.value = '';


    
  }

}
