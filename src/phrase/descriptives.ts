import { Adjective } from "../elements/adjectives";
import { Demonstrative } from "../elements/demonstratives";
import { Noun } from "../elements/nouns";
import { Numeral } from "../elements/numerals";

interface IDescriptiveData {
	demonstratives?: Demonstrative; // 指示词
	numerals?: Numeral; // 数词
	adjectives?: Adjective; // 形容词
	nouns: Noun; // 名词
}

/**
 * 描述短语
 *
 * ` 指示词–数词–分类词–形容词–名词 `
 *
 * @see {@link https://zh.wikipedia.org/wiki/%E6%B1%89%E8%AF%AD%E9%87%8F%E8%AF%8D}
 *
 * @todo 完善描述短语生成器
 */
export class Descriptive {
	data: IDescriptiveData;

	constructor(data: IDescriptiveData) {
		this.data = data;
	}

	build() {
		let data = this.data;

		return (
			(data.demonstratives?.build(true) ?? "") +
			(this.data.numerals?.build() ?? "") +
			this.data.nouns.get_classifier() +
			(data.adjectives?.build() ?? "") +
			data.nouns.build()
		);
	}
}
