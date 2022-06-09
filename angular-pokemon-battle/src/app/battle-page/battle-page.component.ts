import { LoaderService } from './../loader/loader.service';
import { PokemonService } from './../pokemon.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.css']
})
export class BattlePageComponent implements OnInit {
  private _firstPokemon: any; 
  private _secondPokemon: any; 
  private _existingPokemon: any; 
  private _pokemons: any[] = [];
  private _winnerPokemon: any = null;  
  private _newBattle: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  get pokemons(): any[]{
    return this._pokemons
  } 

  get existingPokemon(): any{
    return this._existingPokemon
  }

  get newBattle(): boolean{
    return this._newBattle
  }

  get firstPokemon(): any{
    return this._firstPokemon
  }

  get secondPokemon(): any{
    return this._secondPokemon
  }

  get winnerPokemon(): any{
    return this._winnerPokemon
  }

  
  ngOnInit(): void {
     this.getTwoPokemons();
  }


  getTwoPokemons(): void {
    localStorage.clear();
    this.pokemonService.get().subscribe((response: any) => {
      const firstRandomId = Math.floor((Math.random() * 99) + 1); 
      const secondRandomId = Math.floor((Math.random() * 99) + 1);
      
      this.pokemonService.getPokemonById(firstRandomId).subscribe((response: any) => {
      this._firstPokemon = response})

      this.pokemonService.getPokemonById(secondRandomId).subscribe((response: any) => {
        this._secondPokemon = response;
      });
    
    }, err => {
      console.log(err);
    });
  }

  pokemonFight(): void {
    if(this._firstPokemon.base_experience > this._secondPokemon.base_experience)
    {
      this._winnerPokemon = this._firstPokemon;
    }
    else
    {
      this._winnerPokemon = this._secondPokemon;
    }
    localStorage.setItem("winnerPokemon", JSON.stringify(this._winnerPokemon)) 
  }

  newFight(): void 
  {
    this._newBattle = true; 
    const secondRandomId = Math.floor((Math.random() * 99) + 1);
    const firstRandomId = Math.floor((Math.random() * 99) + 1); 
    this._existingPokemon = JSON.parse(localStorage.getItem('winnerPokemon') || '{}');

    this.pokemonService.getPokemonById(firstRandomId).subscribe((response: any) => {
      this._firstPokemon = response})
    
    this.pokemonService.getPokemonById(secondRandomId).subscribe((response: any) => {
      this._secondPokemon = response;

      if(this._existingPokemon.base_experience > this._secondPokemon.base_experience)
      {
        this._winnerPokemon = this._existingPokemon;
      }
      else
      {
      this._winnerPokemon = this._secondPokemon;
      }

    });
  }

  endGame(): void 
  {
    window.location.reload();
    this.getTwoPokemons();
  }
}
