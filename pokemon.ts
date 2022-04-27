import {PokemonType} from "./pokemonType";

export interface PokemonProps {
    name : string;
    attack : number;
    maxHp: number;
    speed : number;
    pokemontype: PokemonType;
}

export class Pokemon implements PokemonProps{
    currentHp : number;
    name : string;
    attack : number;
    maxHp: number;
    speed : number;
    pokemontype: PokemonType;

    constructor(pokemon: PokemonProps){
        this.currentHp = pokemon.maxHp;
        this.name = pokemon.name;
        this.attack = pokemon.attack;
        this.maxHp = pokemon.maxHp;
        this.speed = pokemon.speed;
        this.pokemontype = pokemon.pokemontype;
    }

    attackTo(pokemon: Pokemon){
        pokemon.currentHp -= this.attack;
    }
}