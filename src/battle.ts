import {isPokemonFire, isPokemonIce, Pokemon} from "./pokemon";

export class Battle {

    async battleRounds(pokemon1: Pokemon, pokemon2: Pokemon): Promise<string> {
        let countRound = 0;
        let p1AsAttack = false;
        while (pokemon1.currentHp <= 0 || pokemon2.currentHp <= 0) {
            if (countRound === 0) {
                if (this.FirstToAttack(pokemon1, pokemon2) === pokemon1) {
                    await this.attack(pokemon1, pokemon2)
                } else {
                    await this.attack(pokemon2, pokemon1)
                }
                countRound++;
            }
            if (p1AsAttack) {
                await this.attack(pokemon2, pokemon1)

                p1AsAttack = false;
            } else {
                await this.attack(pokemon1, pokemon2);
                p1AsAttack = true;
            }
        }
        if (pokemon1.currentHp <= 0) {
            return `${pokemon2.name} is the winner !`
        } else {
            return `${pokemon1.name} is the winner !`
        }
    }

    async attack (from: Pokemon, to: Pokemon){
        return new Promise(function (resolve, reject){
            setTimeout(()=>{
                let coef : number = 1;
                if(isPokemonFire(from)&& isPokemonIce(to)){
                    coef = 1.5;
                }
                if(to.currentHp > from.attack * coef) {
                    to.currentHp -= from.attack * coef;
                }
                else {
                    to.currentHp = 0;
                }
            },5);
        });
    }

    FirstToAttack (pokemon1 : Pokemon, pokemon2 : Pokemon): Pokemon {
        if(pokemon1.speed > pokemon2.speed){
            return pokemon1;
        }
        else{
            return pokemon2;
        }
    }
}
