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
  private _pokemons: any[] = [];
  private _winnerPokemon: any = null;  

  constructor(private pokemonService: PokemonService) { }

  get pokemons(): any[]{
    return this._pokemons
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
     this.getAllPokemons();
  }


  getAllPokemons(): void {
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
    localStorage.setItem("winnerPokemon", JSON.stringify(this._winnerPokemon) ) //ako hoću pretvoriti u objekt JSON.Parse(localStorage.getItem("winnerPokemon"))

  }
}
