import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = "";
  error: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.error = false;
    this.termino = termino;
    if (this.termino.trim().length === 0) {
      return;
    }
    this.paisService.buscarCapital(this.termino).subscribe((paises) => {
      this.paises = paises;
    }, (err) => {
      this.error = true;
      this.paises = [];
    })
  }
}
