import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

 
  constructor(private _gifsService: GifsService) { }

  
  get historialSidebar(){
    return this._gifsService.historial;    
    
  }


  // metodo para traer gifs desde el historial en el sidebar
  buscar( termino: string){
    this._gifsService.buscarGifs(termino);
  }

  

}
