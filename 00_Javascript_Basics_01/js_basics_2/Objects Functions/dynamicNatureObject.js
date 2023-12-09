
//Camelcase -> createRectangle(5, 4);
//constructor function -> Pascal Notation --> first  letter of every word is capital -> NumberOfStudents
//constructor function -> prop/methods -> initialise/Define

////Dynamic Nature Of Objects

function Rectangle(len, bre) {
    this.length =len;
    this.breadth = bre;
    this.draw = function() {
        console.log('drawing');
    }
}

//object creation using constructor function
let rectangleObject = new Rectangle(4,6);

//add New Property
rectangleObject.color = 'yellow';
console.log(rectangleObject);

//remove / delete new property
delete rectangleObject.color;
console.log(rectangleObject);

//Constructor property , means constructor of object
console.log(rectangleObject.constructor);
//this line display the constructor of rectangleObject

//to find the constructor of the Function
console.log(Rectangle.constructor);
//this line will tell us the Constructor of the Rectangle function



