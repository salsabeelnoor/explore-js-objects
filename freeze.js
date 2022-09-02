/*
    1. Object properties are called as keys
    2. keys contain values
*/
const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1
};
//get all the keys
const keys = Object.keys(bottle);

//get all the values
const values = Object.values(bottle);

//return elements as 2D array
const pair = Object.entries(bottle);
/*const twoDArray = [
    [ 'color', 'yellow' ],
    [ 'price', 50 ],
    [ 'isCleaned', true ],
    [ 'capacity', 1 ]
  ] */
// if the object is sealed then the properties can not be deleted or added but can be modified
// Object.seal(bottle);

//freeze doesn't allow delete add or update
Object.freeze(bottle);

// delete a property
delete bottle.isCleaned;
bottle.price = 1000;
console.log(bottle);


