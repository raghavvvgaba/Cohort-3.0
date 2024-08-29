//A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

function random(){

}

let p = new Promise(random); //suppose to return something eventually

function callback(){
    console.log("Promise succeded");
    
}

p.then(callback)

