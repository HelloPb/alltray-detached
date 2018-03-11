

export class HHMM {
    h: string;
    m: string;
    constructor() {
        this.h = '';
        this.m = '';
    }
}


export class Bhs {
    from: HHMM;
    to: HHMM;
    constructor() {
        this.from = new HHMM();
        this.to = new HHMM();
    }
}
