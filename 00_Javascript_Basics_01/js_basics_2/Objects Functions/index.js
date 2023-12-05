console.log('My Name Is Nitish')

//Object create
let rectangle = {
    length: 1,
    breadth: 2,

    draw: function() {
         console.log('drawing rectangle');
    }
};

//factory function
// how to create factory function factory function

// function createRectangle() {
//     let rectangle = {
//         length: 1,
//         breadth: 2,
    
//         draw: function() {
//              console.log('drawing rectangle');
//         }
//     };
 
//     return rectangle;
// }

// // to create object

// let rectangleObj1 = createRectangle();


function createRectangle(len, bre) {
    let rectangle = {
        length: len,
        breadth: bre,
    
        draw: function() {
             console.log('drawing rectangle');
        }
    };
 
    return rectangle;
}

// to create object

let rectangleObj1 = createRectangle(5, 6);