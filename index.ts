import {Pokemon} from "./pokemon";

export function Battle(pokemon1 : Pokemon, pokemon2 : Pokemon): string {
    let countRound = 0;
    let p1AsAttack = false;
    while(pokemon1.currentHp <= 0 || pokemon2.currentHp <=0){
        if(countRound === 0){
            if(FirstToAttack(pokemon1,pokemon2) === pokemon1){
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

export function FirstToAttack (pokemon1 : Pokemon, pokemon2 : Pokemon): Pokemon {
    if(pokemon1.speed > pokemon2.speed){
        return pokemon1;
    }
    else{
        return pokemon2;
    }
}

const pikachu : Pokemon = new Pokemon('Pikachu', 25,5,10);
const bulbizarre : Pokemon = new Pokemon('bulbizarre', 25,5,5);
const salamèche : Pokemon = new Pokemon('salamèche', 25,6,8);



