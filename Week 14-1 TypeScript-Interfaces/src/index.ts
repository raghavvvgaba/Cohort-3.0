// What are interfaces?
// How can you assign types to objects? 
// We can you interfaces for that, shown below


interface User {
    firstname: string,
    lastname: string,
    age: number
}

type UserType = {
    name: string,
    age: number
}

let user: User = {
    firstname: "Raghav",
    lastname: "Gaba",
    age: 21
}


// There are differences between interface and types

// in types, you can do unions. eg - ids can be numbers or strings

type SumInput = string | number;

function sum(a: SumInput, b: SumInput){
    return (a as any) + (b as any)
}

console.log(sum("a",2))

interface Manager {
    name: string,
    age: number
}

interface Employee {
    name: string,
    department: string
}

type TeamLead = Manager & Employee //this is union
let t: TeamLead = {
    name: "Raghav",
    age: 21,
    department: "ahoafa"
}
