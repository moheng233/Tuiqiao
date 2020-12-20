declare module 'nzh/cn' {
    import { generator } from 'nzh';

    export default class nzhcn {
        static encodeS(num:number | string): string;
        static encodeB(num:number | string): string;
        static toMoney(num:number): string;
    }
}

declare module 'nzh' {
    import nzhcn from 'nzh/cn';

    export default {
        cn: nzhcn
    }
}