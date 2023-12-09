

//difference in primitive and reference types

//primitive types -> primitive makes copy

// let a = 10;
// let b = a;

// a++;
// console.log(a); //11
// console.log(b); //10

//reference types -> points on same address

// let a = { value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);


//another example
// when we pass any primitive in function it creates copy

// let a = 10;

// function inc(a) {
//     a++;
// }

// inc(a);
// console.log(a);


////Reference example

let a = {value: 10};

function inc(a) {
    a.value++;
}

inc(a);

console.log(a);

