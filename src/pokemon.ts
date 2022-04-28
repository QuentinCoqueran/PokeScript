export type Pokemon = {
    name : string;
    attack : number;
    maxHp: number;
    currentHp: number;
    speed : number;
    type: string;
}


export type PokemonFire = Pokemon & {
    type : 'fire'
};
export type PokemonIce = Pokemon & {
    type : 'ice'
};

export function isPokemonIce(x: Pokemon): x is PokemonIce {
    return x.type === 'ice';
}

export function isPokemonFire(x: Pokemon): x is PokemonFire {
    return x.type === 'fire';
}

