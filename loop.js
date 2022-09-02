const numbers = [12, 23, 34, 45, 56]
// for(const number of numbers){ }

/*
    1. For Of ==> can not be used on object becaue object is not iterable as array
    2. Three ways to read object property
        a. bottle.color
        b. bottle['color']
        c.bottle[key] ****
*/
const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1
};
// First option to loop through an object
const keys = Object.keys(bottle);

for(const key of keys){
    // console.log(key, bottle[key]);
}

//Second Option ==> for in loop
for(const key in bottle){
    // console.log(key);
}

//advanced system
const pair = Object.entries(bottle); // returns 2D array
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}
