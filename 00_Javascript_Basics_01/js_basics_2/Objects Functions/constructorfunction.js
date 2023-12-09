
//Camelcase -> createRectangle(5, 4);
//constructor function -> Pascal Notation --> first  letter of every word is capital -> NumberOfStudents
//constructor function -> prop/methods -> initialise/Define

function Rectangle(len, bre) {
    this.length =len;
    this.breadth = bre;
    this.draw = function() {
        console.log('drawing');
    }
}

//object creation using constructor function
let rectangleObject = new Rectangle(4,6);

