const map = new Map();
map.set('name','Raghav');
map.set('age',20);

const firstName = map.get('name');
console.log(firstName);

setTimeout(()=>{
    console.log("Hi");
    setTimeout(()=>{
        console.log("hi there");
        setTimeout(()=>{
            console.log("Hello there");
        },5000)
    },3000)
},1000)