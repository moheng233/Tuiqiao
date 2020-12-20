/**
 * 形容词
 */
export class Adjective {
	str: string[];

	constructor(str: string[], ) {
		this.str = str;
	}

	build(yuo: boolean = false) {
		if (
			this.str.every((e) => {
				return e.length == 1;
			})
		) {
			if (yuo) {
				return `又${this.str.join("又")}`;
			}
			return this.str.join("");
		} else {
			if (
				this.str.every((e) => {
					return e.length > 1;
				})
			) {
				return `${this.str.join("")}的`;
			}
		}
	}
}
