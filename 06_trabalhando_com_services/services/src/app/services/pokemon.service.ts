import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl: string = '';

  constructor() {
    this.baseUrl = environment.pokeApi;
  }

  getPokemon(pokemonName: string) {
    console.log(this.baseUrl);
  }
}
