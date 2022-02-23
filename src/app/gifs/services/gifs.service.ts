import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'raRtghTR8PVTUukbpiLri8xVKSk12PHQ';
  private servicioUrl: string = 'http://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {    
    return [...this._historial];
  }


  // el constructor solo se ejecuta una vez en el servicio
  constructor(private http: HttpClient){
    //---- una forma de hacerlo para mostrar lo guardado en localStorage
   // if( localStorage.getItem('historial')){
      // JSON.parse caso opuesto del stringify, toma un obetivo convertido en string y lo retorna a lo que era
     // this._historial = JSON.parse( localStorage.getItem('historial')! );

     //----- otra forma de hacerlo mas simple en una sola linea
     this._historial = JSON.parse(localStorage.getItem('historial')! ) || [];

     this.resultados = JSON.parse(localStorage.getItem('resultados')! ) || [];
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

          //localStore es propio de javaScript, el setIten recibe una clave y un valor de tipo string
          // JSON.stringify() recibe un objeto y convierte el objeto en string
          localStorage.setItem('historial', JSON.stringify(this._historial));
    } 


    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query);

 

    //this.http.get<SearchGifsResponse>(`http://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
      this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { params } )    
          .subscribe( (resp ) => { 
            console.log(resp.data);
            this.resultados = resp.data;
            
            localStorage.setItem('resultados', JSON.stringify(this.resultados) );
           
          });
          // el subscribe se va ejecutar cuando se tenga la resolucion del http.get
  }
}


// httpClient trabaja con observables, son o retornan observables
//los observables son mejor que las promesas porque tienen mejor control