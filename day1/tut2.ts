//working with functions

function addit(num1:number , num2:number){
    return num1 + num2;
}
//it is important to provide types with functions as functions take any as default type and can run into errors

//lets work with arrow functions we can provide default values while working with functions

let doit = (name : string , email : string, ispaid : boolean=false)=>{
    console.log(
        "providing default value"
    )
}