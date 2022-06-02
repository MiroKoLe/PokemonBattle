import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Pokemon } from './pokemon.interface';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  apiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=100`;


  constructor(private http: HttpClient) { }

  get(): Observable<Pokemon>{
    return this.http.get<Pokemon>(this.apiUrl)
    .pipe(catchError(this.errorHandler));
  }

  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .pipe(catchError(this.errorHandler));
  }

  getPokemonById(id: number): Observable<any>{
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }
}
