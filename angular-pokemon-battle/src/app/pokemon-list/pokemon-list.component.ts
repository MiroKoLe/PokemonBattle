import { PokemonService } from './../pokemon.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  private _pokemons: any[] = [];
  private _isDetails: boolean = false;
  pageSize = 15; 
  page = 20; 
  collectionSize = this._pokemons.length; 
  pokemon: string = '';


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }
  
  get pokemons(): any[]{
    return this._pokemons
  } 

  get isDetails(): boolean{
    return this._isDetails
  }

  getAllPokemons(): void {
    this.pokemonService.get().subscribe((response: any) => {
      response.results.forEach((result: { name: string; }) => {
        this.pokemonService.getMoreData(result.name)
        .subscribe((data: any) => {
          this._pokemons.push(data); 
          console.log(this._pokemons);
        })
      });
    }, err => {
      console.log(err);
    });
  } 

  getDetails(): void{
    this._isDetails = true; 
  }

  backToList(): void{
    this._isDetails = false; 
  }
}

