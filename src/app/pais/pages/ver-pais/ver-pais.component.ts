import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
    `img {
      max-width: 100%
    }`
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  traducciones: string[] = [];

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) {}

  ngOnInit(): void {
    // this.ActivatedRoute.params.subscribe(({id}) => {
    //   this.paisService.detallePais(id).subscribe(resp => {
    //     console.log(resp);
    //   })
    // });
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.paisService.detallePais(id))
      )
      .subscribe(pais => {
        this.pais = pais;
        this.traducciones = Object.values(pais.translations);
      })
  }

}
