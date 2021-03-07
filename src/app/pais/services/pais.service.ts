import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private URL: string = "https://restcountries.eu/rest/v2";

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.URL}/name/${termino}`);
  }

  buscarCapital(termino: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.URL}/capital/${termino}`);
  }

  detallePais(codigo: string): Observable<Country> {
    return this.http.get<Country>(`${this.URL}/alpha/${codigo}`);
  }

  buscarRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.URL}/region/${region}`);
  }
}
