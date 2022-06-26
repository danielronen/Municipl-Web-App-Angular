import Person from "../Person";

export default class Events{
    public name: string;
    public code: number;
    public address: string;
    public participants: number;
    public manager: Person;


    constructor(name:string,code:number,address:string,participants:number,manager:Person){
        this.name=name;
        if(code < 300 || code > 700)
            code = (Math.random() * 400) + 300;
        this.code = code;
        this.address = address;
        if(participants > 500000)
            participants = 500000;
        this.participants = participants;
        this.manager = manager;
    }
}