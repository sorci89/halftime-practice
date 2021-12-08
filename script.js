const array1 = ["alma", "körte", "banán"];
const array2 = ["barack", "szilva", "szőlő"];

function addValueToEndOfArray(arr, val) {
    arr.push(val);
    return arr;
}
//console.log(addValueToEndOfArray(array1, "dió"));

function addValueToEndOfNewArray(arr, val) {
    // 1) opció:
    //const newArray = [...arr];
    //newArray.push(val);
    //return newArray

    // 2) opció:
    return [...arr, val];
};

//console.log(addValueToEndOfNewArray(array2, "dió"));
//console.log(array2);

function addNewArray(arr1, arr2) {
    // 1) opció:
    //for (const item of arr2) {
    //    arr1.push(item);
    //}
    //return array1;

    //2) opció:
   //return [...arr1, ...arr2];

    //3) opció:
    return arr1.concat(arr2);
}
console.log(addNewArray(array1, array2));
console.log(array1);

const array3 = [
    {
        name: "Garfield",
        type: "cat"
    },
    {
        name: "Garfield2",
        type: "dog"
    }
];

function filterTheCat(creatures) {
    //1) ocpió:
    //const result = [];
    //for(let creature of creatures) {
    //    if (creature.type === "cat") {
    //        creature.note = "This is an amazing cat";
    //        result.push(creature);
    //    }
   //}
   
   const result = creatures.filter(creature => {
    if (creature.type === "cat") {
        creature.note = "This is an amazing cat";
        return creature;
    }
    })       

   return result;   
};

console.log(filterTheCat(array3));
console.log(array3);

/*
let a = 1;
let b = a;

a = 2;
b = 3;
console.log("a:", a, " b:", b);

let c = {key: 1};
let d = c;

c.key = 2;
d.key = 3;
console.log("c:", c, " d:", d);
console.log({}==={});

//let f = {...c};
let f = Object.assign({}, c);
c.key = 2;

console.log(c)

let f = JSON.parse(JSON.stringify(c));
*/

