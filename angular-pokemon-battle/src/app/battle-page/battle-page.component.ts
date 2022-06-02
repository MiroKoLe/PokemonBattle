import { PokemonService } from './../pokemon.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.css']
})
export class BattlePageComponent implements OnInit {
  @Input() firstPokemon: any; 
  @Input() secondPokemon: any; 
  private _pokemons: any[] = [];
  private _twoPokemons: any[] = []
  private _hasWon: boolean = false; 

  constructor(private pokemonService: PokemonService) { }

  get pokemons(): any[]{
    return this._pokemons
  } 

  get hasWon(): boolean {
    return this._hasWon
  }

  get twoPokemons(): any[]{
    return this._twoPokemons
  }

  
  ngOnInit(): void {
     this.getAllPokemons();
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
    let firstPokemon = this._pokemons[Math.floor(Math.random() * this._pokemons.length)];
    console.log(firstPokemon);
    let secondPokemon = this._pokemons[Math.floor(Math.random() * this._pokemons.length)];
    console.log(secondPokemon);
  }

}
