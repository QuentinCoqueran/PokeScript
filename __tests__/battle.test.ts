import {PokemonType} from "../pokemonType";
import {Pokemon, PokemonProps} from "../pokemon";
import {Battle} from "../battle";

const battle : Battle = new Battle();
const pikachu : Pokemon = new Pokemon( {name: 'Pikachu', maxHp: 25, attack: 5, speed: 10, pokemontype: 'electric'});
const bulbizarre : Pokemon = new Pokemon( {name: 'Bulbizarre', maxHp: 25, attack: 5, speed: 5, pokemontype: 'grass'});
const salameche : Pokemon = new Pokemon( {name: 'Salamèche', maxHp: 25, attack: 6, speed: 8, pokemontype: 'fire'});




describe("Battle", () => {
    describe("first to attack", () => {
        describe("when Pikachu and Salamèche fights ", () => {
            it("should return Pikachu as first to attack", () =>{
                expect(battle.FirstToAttack(pikachu,salameche)).toBe(pikachu);
            });
        });

        describe("when Salamèche and Bulbizarre fights ", () => {
            it("should return Salamèche as first to attack", () =>{
                expect(battle.FirstToAttack(salameche,bulbizarre)).toBe(salameche);
            });
        });

        describe("when Pikachu and Bulbizarre fights ", () => {
            it("should return Pikachu as first to attack", () =>{
                expect(battle.FirstToAttack(pikachu,bulbizarre)).toBe(pikachu);
            });
        });
    });
    describe("Winners", () => {
        describe("when Pikachu and Salamèche fights ", () => {
            it("should return Pikachu as winner", () =>{
                expect(battle.battleRounds(pikachu,salameche)).toBe('Pikachu is the winner !');
            });
        });

        describe("when Salamèche and Bulbizarre fights ", () => {
            it("should return Salamèche as winner", () =>{
                expect(battle.battleRounds(salameche,bulbizarre)).toBe('Salamèche is the winner !');
            });
        });

        describe("when Pikachu and Bulbizarre fights ", () => {
            it("should return Pikachu as winner", () =>{
                expect(battle.battleRounds(pikachu,bulbizarre)).toBe('Pikachu is the winner !');
            });
        });
    });
});

