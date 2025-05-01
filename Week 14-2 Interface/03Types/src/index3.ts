//arrays in TS
type NumberArr = number[];

function maxValue(arr: NumberArr){
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

// given a list of users, filter out the users that are legal

interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function filterUsers(users: User[]) {
    let ans = [];
    for (let i= 0; i < users.length; i++){
        if(users[i].age >= 18){
            ans.push(users[i])
        }
    }
    return ans;
    
}