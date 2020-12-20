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
    de: boolean;

    constructor(subject:string,de: boolean = false){
        this.subject = subject;
        this.de = de;
    }

    build(){
        return this.subject + (this.de?"的":"")
    }
}