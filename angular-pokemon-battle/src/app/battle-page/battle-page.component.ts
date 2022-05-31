import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-battle-page',
  templateUrl: './battle-page.component.html',
  styleUrls: ['./battle-page.component.css']
})
export class BattlePageComponent implements OnInit {
  private _pokemons: Pokemon[] = [];


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(): void {
    this.pokemonService.get().subscribe((response) => {
      this._pokemons = response;
      console.log(this._pokemons);
    }, err => {
      console.log(err);
    });
  }
}
