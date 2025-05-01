"use strict";
// ts doesn't complain when you change the values of objects and arrays in const
// because you don't change the value of a, so the address doesn't change, the value inside is changed
const a = [1, 2, 3];
a[0] = 4;
const obj = {
    name: 'John',
    age: 25,
    country: 'USA'
};
obj.name = "adf";
const user = {
    name: 'John',
    age: 25
};
const config = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
};
// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.
