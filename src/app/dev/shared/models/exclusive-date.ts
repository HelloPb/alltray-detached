import { Bhs } from './bhs';

export class ExclusiveDate {
    from: string;
    to: string;
    bhs: Bhs[];
    constructor() {
        this.from = '';
        this.to = '';
        this.bhs = [new Bhs()];
    }
}
