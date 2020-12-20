import { Adjective } from "../elements/adjectives";
import { Demonstrative } from "../elements/demonstratives";
import { Noun } from "../elements/nouns";
import { Numeral } from "../elements/numerals";
import { Descriptive } from "../phrase/descriptives";

export class DaoNoun extends Noun {
	constructor(main_noun: string) {
		super(main_noun, "刀");
	}

	get_classifier() {
		return "把";
	}
}

let tiandidao = new DaoNoun("天地");
console.log(tiandidao.build());

let d = new Descriptive({
	demonstratives: new Demonstrative("墨恒"),
    nouns: tiandidao,
    adjectives: new Adjective(["损坏"]),
	numerals: new Numeral(78,true),
});

console.log(d.build());
