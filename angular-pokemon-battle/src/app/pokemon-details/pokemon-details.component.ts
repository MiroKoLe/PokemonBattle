import { getCurrencySymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemon: any; 
  private _isDetails: boolean = false;


  constructor() { }

  get isDetails(): boolean{
    return this._isDetails
  }

  ngOnInit(): void {
  }

  getDetails(): void{
    this._isDetails = true; 
  }

  backToList(): void{
    this._isDetails = false; 
  }
}
