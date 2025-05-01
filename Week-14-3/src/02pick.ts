interface User0 {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

// function updateUser(name: string, age: number, password: string){
//     // hit the database
// }


// We can't allow the update function to change everything in User. So we need to pass only selected properties to the function

//Passing so many arguments to a function isn't ideal. 
// So we use Pick
// It can pick items from type and interface

type UpdateProps = Pick<User0, 'name'|'age'|'email'>

function updateUser(updatedProps: UpdatePropsOptional){
    // hit the database
}

//<--------------------->
// Partial is allowing items optionally
// Eariler we did it with ? in front of the items, we can also do it this way

type UpdatePropsOptional = Partial<UpdateProps>

updateUser({

})