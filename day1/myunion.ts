let score: number | string =33

//we can do that too

type user = {
    name :string,
    email:string,
    age:number
}

type Admin ={
    username:string,
    email:string
    age:number
}

let histes :user| Admin = {name:'it' , email:'it' , age:2}
//or we can do that

histes = {username:'it' , email:'it' , age:22};

const data3 : (string | number) [] = ["1", "2", 3];
//by this sysntax we cam have both strings and number in same array


//strict values 
let pi:3.14 = 3.14

export {}