function identity<Type>(val: Type):Type {
    return val;

}

//or we can do this 

function identity2<T> (val: T):T{
    return val;
}

//instanceof keyword 

function Logvalue(x:Date|string){
    if(x instanceof Date){
       console.log(x.toUTCString)
    }else{
        console.log(x.toUpperCase())
    }


}
