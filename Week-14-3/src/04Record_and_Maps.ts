// You can type objects like this
type Users = {
    id: string;
    username: string;
}

type Userss = {
    [key: string]: Users
}

const users: Userss = {
    "ras@qdl": {
        id: 'ras@qdl',
        username: 'harkirat'
    },
    "ras1dr@": {
        id: 'ras1dr@',
        username: 'raman'
    },

}

// or use records 
interface Users1 {
    id: string;
    name: string;
  }
  
  type Userss1 = Record<string, Users1>;
  
  const users1: Userss1 = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }


// maps gives you an even fancier way to deal with objects. Very similar to Maps in C++

interface Users2 {
    id: string;
    name: string;
  }
  
  // Initialize an empty Map
  const usersMap = new Map<string, Users2>();
  
  // Add users to the map using .set
  usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
  usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
  // Accessing a value using .get
  console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }