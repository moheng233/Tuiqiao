import nzhcn from "nzh/cn";

export class Numeral {
	num: number;
	di: boolean;

	constructor(num: number, di: boolean = false) {
		this.num = num;
		this.di = di;
	}

	build(di: boolean = this.di) {
		return (di ? "第" : "") + nzhcn.encodeS(this.num);
	}
}
