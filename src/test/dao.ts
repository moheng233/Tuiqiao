import { Noun } from "../elements/nouns";

export class DaoNoun extends Noun {
    constructor(main_noun: string){
        super(main_noun,"刀");
    }

    get_classifier(){
        return "把"
    }
}