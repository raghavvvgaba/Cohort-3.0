//The async and await syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.

function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration)
    })
}
//syntatic sugar
async function solve() {
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("Hello");
    await setTimeoutPromisified(5000);
    console.log("Hello there");
}
solve();