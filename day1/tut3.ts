//this function can only return a number 

function addTwo(num: number):number{
    return num + 2;
}

const heros = ["thor","iron man","spiderman"]

//this is map which shows that the map will only return string values
heros.map((hero):string=>{
    return `hero is ${hero}`;
})

//type void return nothing

function sayHello():void{
    console.log("hello world");
}

sayHello();

