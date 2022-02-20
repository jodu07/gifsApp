import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { GifsService } from './services/gifs.service';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [

    BusquedaComponent,
    GifsPageComponent,
    ResultadosComponent
  ],

  exports: [
    GifsPageComponent
  ],

  imports: [
    CommonModule
  ],
  providers: [
    GifsService
  ],
})
export class GifsModule { }