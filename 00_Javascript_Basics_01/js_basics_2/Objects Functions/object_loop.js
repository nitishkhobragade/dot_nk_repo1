
//Loops in objects , For-in, For-of

let rectangle = {
    length:2,
    breadth:4,
};

//for-in loop
for(let key in rectangle ) {
    console.log(key); //access all keys of rectangle
}

for(let key in rectangle ) {
    //keys are reflected through key variable
    //values are reflacted through rectangle[key]
    console.log(key, rectangle[key]); //access all keys n values of rectangle
}

//for-of loop

//for keys
for(let key of Object.keys(rectangle)) {
    console.log(key); 
}

//for entries
for(let key of Object.entries(rectangle)) {
    console.log(key);
}

