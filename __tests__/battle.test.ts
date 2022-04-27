import {Battle, FirstToAttack} from "../index";
import {Pokemon} from "../pokemon";

const pikachu : Pokemon = new Pokemon('Pikachu', 25,5,10);
const bulbizarre : Pokemon = new Pokemon('Bulbizarre', 25,5,5);
const salameche : Pokemon = new Pokemon('Salamèche', 25,6,8);



describe("Battle", () => {
    describe("first to attack", () => {
        describe("when Pikachu and Salamèche fights ", () => {
            it("should return Pikachu as first to attack", () =>{
                expect(FirstToAttack(pikachu,salameche)).toBe(pikachu);
            });
        });
        describe("when Salamèche and Bulbizarre fights ", () => {
            it("should return Salamèche as first to attack", () =>{
                expect(FirstToAttack(salameche,bulbizarre)).toBe(salameche);
            });
        });
        describe("when Pikachu and Bulbizarre fights ", () => {
            it("should return Pikachu as first to attack", () =>{
                expect(FirstToAttack(pikachu,bulbizarre)).toBe(pikachu);
            });
        });
    });
    describe("Winners", () => {
        describe("when Pikachu and Salamèche fights ", () => {
            it("should return Pikachu as winner", () =>{
                expect(Battle(pikachu,salameche)).toBe('Pikachu is the winner !');
            });
        });
        describe("when Salamèche and Bulbizarre fights ", () => {
            it("should return Salamèche as winner", () =>{
                expect(Battle(salameche,bulbizarre)).toBe('Salamèche is the winner !');
            });
        });
        describe("when Pikachu and Bulbizarre fights ", () => {
            it("should return Pikachu as winner", () =>{
                expect(Battle(pikachu,bulbizarre)).toBe('Pikachu is the winner !');
            });
        });
    });
});

