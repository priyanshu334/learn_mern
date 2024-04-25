function createCourse():{name:string,price:number}{
    return {
        name:"react",
        price:100
    }

}

type User = {
    name :string,
    email:string,
    age:number
}

// readonly keyword atcs as we can't change anything 

type user ={
    readonly _id :string,
    name :string,
    email:string,
    age:number
    creditcardDetails?:number//this syntax is used for optional 

}
let user1 :user={
    _id:"123",
    name:"name",
    email:"email",
    age:22
}

type cardname = {
    catdname:string
}
type cardnumber ={
    number :number
}

type cardDetails = cardname & cardnumber &{
    cvv:number
}

//working with arrays 

const superHeros : string[] =[] //one way of providing type to array
superHeros.push("thor")

const heroPower : Array<number> =[]
heroPower.push(100)


type User2 ={
    name :string,
    email:string,
    age:number
}
const user4 : Array<User2> =[]
user4.push({
    name:"name",
    email:"email",
    age:22
})
export {}

