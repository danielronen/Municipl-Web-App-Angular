export default class Person{

    private _id!: string;
    private _name!: string;
    private _age!: number;
    private _isMale!: boolean;
    private _city:string = "Ariel";
    private _image!: string;

    public get IsMale():boolean{
        return this._isMale;
    }
    public set IsMale(value: boolean){
        this._isMale = value;
    }

    public get City():string{
        return this._city;
    }

    public set City(value:string){
        this._city = value;
    }

    public get Name():string{
        return this._name;
    }
    public set Name(value:string){
        this._name = value;
    }

    public get Age():number{
        return this._age;
    }
    public set Age(value:number){
        if(value > 0 && value < 120)
            this._age = value;
    }

    public get Id():string{
        return this._id;
    }
    public set Id(value:string){
        if(value.length>7 && value.length <10)
            this._id = value;
    }

    public get Image():string{
        return this._image;
    }

    public set Image(value:string){
        this._image = value;
    }


    public constructor(id:string, name:string, age:number, isMale:boolean, city:string, image:string){
        this.Id = id;
        this.Name = name;
        this.Age = age;
        this.IsMale = isMale;
        this.City = city;
        this.Image = image
    }

    toString():string{
        return ` Name: ${this.Name}, Age: ${this.Age}, id: ${this.Id}, City: ${this.City}, is a male: ${this.IsMale}`;
    }
}