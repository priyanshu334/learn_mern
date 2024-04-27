const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
         console.log('promise one ');
         resolve();
    }, 1000)
})
promiseOne.then(function (value) {
    console.log("promise value '" + value )
})

async function getalluses(){
    const response = await fetch()
}