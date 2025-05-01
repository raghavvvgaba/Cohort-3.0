// ts doesn't complain when you change the values of objects and arrays in const

// because you don't change the value of a, so the address doesn't change, the value inside is changed

const a= [1,2,3];
a[0] = 4;

const obj = {
    name: 'John',
    age: 25, 
    country: 'USA'
}

obj.name = "adf"

// to enforce that no changes are allowed in objects and arrays as well, we use readonly

type UserS = {
    readonly name: string;
    readonly age: number;
}

const user: UserS = {
    name: 'John',
    age: 25
}

//perfect example for it
interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
  }
  
  const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
  };
  
  // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.