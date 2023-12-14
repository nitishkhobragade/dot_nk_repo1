////object cloning with iteration method with loop (first method)

// let src = {
//     a:10,
//     b:20,
//     c:30
// }

// let dest ={};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

/////second method-- using assign function

// let src= {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = {value: 25};

// let dest = Object.assign({}, src, src2);
// console.log(dest);

// src.a++;

// console.log(dest);



/////third method-- Spread , spread operator (...)

let src= {
    a:10,
    b:20,
    c:34
};

let dest = {...src};

console.log(dest);

src.a++;

console.log(dest);