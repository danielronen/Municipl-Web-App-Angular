import Person from "../Person";

export default class Employee extends Person{
    private duty!: string;
    private hours!: number;
    private perHour!: number;

    public get Duty():string{
        return this.duty;
    }

    public set Duty(value:string){
        this.duty = value;
    }

    public get Hours():number{
        return this.hours;
    }
    public set Hours(value:number){
        this.hours = value;
    }

    public get PerHour():number{
        return this.perHour;
    }
    public set PerHour(value:number){
        this.perHour = value;
    }

    constructor(id:string, name:string, age:number, isMale:boolean, city:string, image:string, duty:string, numOfHours: number, perHour: number){
        super(id,name,age,isMale,city,image);
        this.Duty = duty;
        this.Hours = numOfHours;
        this.PerHour = perHour;

    }
}