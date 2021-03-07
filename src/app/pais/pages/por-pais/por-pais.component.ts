import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = "";
  error: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.error = false;
    this.termino = termino;
    if (this.termino.trim().length === 0) {
      return;
    }
    this.paisService.buscarPais(this.termino).subscribe((paises) => {
      this.paises = paises;
    }, (err) => {
      this.error = true;
      this.paises = [];
    })
  }
  sugerir(termino: string){
    this.error = false;
  }
}
