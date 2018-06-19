// const person = {
//   name: 'Zeeshan',
//   age: 19,
//   location: {
//     city: 'New Delhi',
//     temp: 46
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// console.log(`its ${temperature} in ${city}`);

//---------------------------------
// ARRAY DESTRUCTURING
//--------------------------------

const address = [
  '1299 S Juniper Street',
  'Philadelphia',
  'Pennsylvania',
  '19147'
];

const [, city, state = 'New York'] = address;

console.log(`You are in ${address[1]} ${address[2]}.`);
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffeeType, , mediumPrice] = item;

console.log(`A medium ${coffeeType} costs ${mediumPrice}`);
