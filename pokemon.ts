export class Pokemon{
    currentHp : number;
    name : string;
    attack : number;
    maxHp: number;
    speed : number;


    constructor(name: string, maxHp: number, attack: number, speed: number) {
        this.currentHp = maxHp;
        this.name = name;
        this.attack = attack;
        this.maxHp = maxHp;
        this.speed = speed;
    }

    attackTo(pokemon: Pokemon): void {
        pokemon.currentHp -= this.attack;
    }

}