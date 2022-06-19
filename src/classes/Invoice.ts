import {HasFormatter} from "../interfaces/HasFormatter.js"

// Classes
export class Invoice implements HasFormatter{

    // readonly client: string;
    // private details: string;
    // public amount: number;

    /*
    *Three different modifies
  
    readonly //only allow readonly both side inside of class and outside of class 
    private //only allow to read and change inside the class
    public => which is default value- public value can be change from inside class or outside of class

    */
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }

    //replaced all above with this only
    //in this cunstrutor we have to specify modifier
    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ) { }

    format() {
        return `${this.client} owes £ ${this.amount} for ${this.details}`
    }

}


