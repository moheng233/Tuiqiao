/**
 * 名词生成器
 */
export class Noun {
    main_noun: string;
    modifier_noun: string;

    /**
     * 生成一个由主名词和修饰名词组成的名词
     * @param main_noun 主名词
     * @param modifier_noun 修饰名词
     */
    constructor(main_noun: string,modifier_noun: string){
        this.main_noun = main_noun;
        this.modifier_noun = modifier_noun;
    }

    get_classifier(){
        return "个";
    }

    /**
     * 生成名词
     * 
     * 例子:
     * - 主名词:  屠龙
     * - 修饰名词: 刀
     * 
     * 生成: 屠龙刀
     * 
     * 中文没有复数形式
     * @param some 复数形式
     */
    build(some: boolean = false){
        return this.main_noun +  this.modifier_noun;
    }
}