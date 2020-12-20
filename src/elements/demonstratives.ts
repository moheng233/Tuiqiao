/**
 * 指示词
 *
 * - 我的
 * - 那
 * - 墨恒的
 * - 这
 */
export class Demonstrative {
	subject: string;

	constructor(subject: string) {
		this.subject = subject;
	}

	build(de: boolean = false) {
		return this.subject + (de ? "的" : "");
	}
}
