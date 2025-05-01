// Create two types called User and Admin,
// Create a function that takes either a user or an admin as an input, and returns a string saying "Welcome, [name]".

interface Admin {
    name: string;
    permissions: string;
}

interface User {
    name: string;
    age: number;
}

type UserOrAdmin = User | Admin
function greet(user: UserOrAdmin){
    console.log(user.name);
    // console.log(user.age)        //can't be called because doesn't exist in both
}