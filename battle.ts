import {Pokemon} from "./pokemon";

export class Battle {

    battleRounds(pokemon1 : Pokemon, pokemon2 : Pokemon): string {
        let countRound = 0;
        let p1AsAttack = false;
        while(pokemon1.currentHp <= 0 || pokemon2.currentHp <=0){
            if(countRound === 0){
                if(this.FirstToAttack(pokemon1,pokemon2) === pokemon1){
                    pokemon1.attackTo(pokemon2);
                }
                else{
                    pokemon2.attackTo(pokemon1);
                }
                countRound ++;
            }
            if(p1AsAttack){
                pokemon2.attackTo(pokemon1);
                p1AsAttack = false;
            }
            else{
                pokemon1.attackTo(pokemon2);
                p1AsAttack = true;
            }
        }
        if(pokemon1.currentHp <= 0){
            return `${pokemon2.name} is the winner !`
        }
        else{
            return `${pokemon1.name} is the winner !`
        }
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
