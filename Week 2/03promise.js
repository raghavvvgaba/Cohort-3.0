//A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

function random(){

}

let p = new Promise(random); //suppose to return something eventually

function callback(){
    console.log("Promise succeded");
    
}

p.then(callback)

const fs = require('fs');

function readFileAsync(){
    return new Promise(function(resolve, reject){
        fs.readFile("aasshdfdi.txt","utf-8",function(err,data){
            if(err){
                reject("File not found")
            }
            else{
                resolve(data);
            }
            })
        })
    }
readFileAsync()
    .then(function(x){
        console.log("Files have been read");
    })
    .catch(function(e){
        console.log(e);
    })


