interface Address {
    city: string;
    country: string;
    pincode: number
}

interface User {
    name: string;   //you can put strings and numbers here as well
    age?: number;    // ? after age means that age field is optional now
    address: Address    //interfaces can use other interfaces
}

interface Office {
    address: Address
}

let user: User = {
    name: "Raghav",
    age: 21,
    address: {
        city: "Jaipur",
        country: "India",
        pincode: 3184071
    }
}

function isLegal(user: User): boolean {
    if(user.age!=undefined && user.age >= 18)
        return true
    else
        return false
}