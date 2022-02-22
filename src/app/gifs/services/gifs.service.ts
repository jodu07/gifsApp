import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];

  get historial() {
    
    return [...this._historial];
  }

  buscarGifs( query:string = ''){

    // trim para borrar espacios y toLowerCase para convertir en minuscula
    // tod0 lo que ingrese se convierte a minuscula para hacer la comparacion que el valor ingresado no exista en el arreglo
    query = query.trim().toLowerCase();
    
    // include para preguntar si existe o no existe para incluir lo que estoy poniendo en query
    // asigno el signo de admiracion  para decir que si no existe lo incluya en el arreglo_historial
    //compara si ya existe en el arreglo _hitorial
    if( !this._historial.includes(query)){
          //unshift para insertar al inicio del arreglo el argumento query
          this._historial.unshift(query);

          // splice para cortar el arreglo hasta 10
          this._historial = this._historial.splice(0,10);
    } 



    console.log(this._historial)

  }









}
