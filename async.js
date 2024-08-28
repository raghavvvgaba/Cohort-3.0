/*Anything that - 
1. Requires Web APIs
2. Is I/O intensive
3. You offload to someone else
or anything that you build on top of these is asynchronous */

const fs = require('fs');

function print(err,data){
    if(err){
        console.log("File not found");
    }
    else
    console.log(data);
    
}
fs.readFileSync('a.txt','utf-8', print); //this performs synchronous operation. Until this code finishes, it won't move further and will sit idle

fs.readFile('b.txt','utf-8', print); //This is asynchronous operation. This keeps the code running further and it takes it own time to complete simultaneously. It calls the print function after it is done reading the file
console.log("Done");

/*Common interview question 
What will be the output after it runs
The output will be 
Done
Hi there
Hi from b.txt

It is like this because it first completes the synchronous task which is printing "done" and then shows the output for async operations*/

//---------------------------------------------------------------------------------------------------------------------------------------
function timeout(){
    console.log("Click the button");
    
}
console.log("hi");
setTimeout(timeout, 1000);  
console.log("Welcome to loupe");

let c = 0;
for(let i = 0; i <= 1000000000000; i++){
    c = c + 1;
}
console.log("Expensive operation done");

/* What does this code prints?
Ans - 
hi
Welcome to loupe
Expensive operation done
Click the button
Reason - It is because the CPU was occupied while running the for loop. So even though the timeout was just for 1 second, the loop occupied the CPU for 3-4 seconds, therefore the output              */


/* JavaScript is single threaded language. So even if there are 10 tasks waiting in the callback queue and there is a CPU intensive task running, the intensive task will be completed first and then the tasks in the callback queue will be executed. There is no direct way to use multiple threads to perform the tasks in the callback queue while there is a CPU intensive task running. 
You can spawn multiple threads in other languages like C++, Java, Rust, GoLang */