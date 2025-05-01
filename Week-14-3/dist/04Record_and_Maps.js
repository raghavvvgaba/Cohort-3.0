"use strict";
const users = {
    "ras@qdl": {
        id: 'ras@qdl',
        username: 'harkirat'
    },
    "ras1dr@": {
        id: 'ras1dr@',
        username: 'raman'
    },
};
const users1 = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};
console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }
// Initialize an empty Map
const usersMap = new Map();
// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }
