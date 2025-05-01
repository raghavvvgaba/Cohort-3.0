function greet(firstName: string){
    console.log("Hello" + firstName);
}
greet("Raghav");

function sum(a: number, b: number): number {
    return a+b;
}

let ans = sum(2,3);

//<---------------------------------------->
// write a function that takes another function as input and returns after 1 second delay

function delayedCall(anotherFn: () => void){
    setTimeout(anotherFn, 1000);
}

function log(){
    console.log("Hello")
}

delayedCall(log)


//<------------------------------------------->
function delayedCall2(anotherFn: () => number){
    setTimeout(anotherFn, 1000);
}

function log2(){
    console.log("Hello");
    return 1;
}

delayedCall2(log2)


// defining a function with an object

function greetUser(user: {
    name: string,
    age: number
}) {
    console.log("hello" + user.name)
}

let user = {
    name: "Raghav",
    age: 21
}

greetUser(user)