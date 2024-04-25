enum SeatChoice{
    AISLE,
    MIDDLE,
    WINDOW,
}

class User {
    email :string;
    name :string 
    constructor(email:string,name:string){
        this.email = email;
        this.name = name;
    }
}