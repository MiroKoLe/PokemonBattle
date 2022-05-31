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
    this.getRandomPokemons();
    // this.getAllPokemons();
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
  } //list has been completed. this will go in another compoment at the end

  getRandomPokemons(): void {
    this.getAllPokemons(); 
    const size = 3; 
     this._twoPokemons = this._pokemons.slice(0, size)
     console.log(this._twoPokemons)
    
  }
}
