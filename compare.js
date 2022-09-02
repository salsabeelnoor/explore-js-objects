/*
    1. comparing object and array ==> they will be different cause they are pointing to the different
    location in the memory. that's why first and second will give output as different.
    2. here third and second are ponting to the same location in the memory. if they are compared they will give output as ==> they are same
*/

const first = {a: 2, b: 2, c: 5} ;
const second = {a: 2, c: 5, b: 2} ;
const third = second;
// if(first === second){
//     console.log('they are same')
// }
// else{
//     console.log('different')
// }

//solution to this problem ==> do not use this method to compare object or array
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
// console.log(firstString, secondString);
// if(firstString === secondString){
//     console.log('same');
// }
// else{
//     console.log('different');
// }


//another solution
function comopareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(first[key] !== second[key]){
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}
const isSame = comopareObject(first, second);
console.log(isSame);