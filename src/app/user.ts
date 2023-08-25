export class User {
    username:string;
    email:string;
    pwd:string;
    birthdate:string;
    age:number;
    valid:boolean;

    constructor(username:string='', email:string='', pwd:string='', birthdate:string='', age:number=0, valid=false) {
        this.username = username;
        this.email = email;
        this.pwd = pwd;
        this.birthdate = birthdate;
        this.age = age;
        this.valid = valid;
    }
}