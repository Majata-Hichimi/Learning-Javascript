/**
 * An object is just a variable that holds other variables
 * An object has a value and a property
 * An object can also have methods
 */

//and object
const car = new Object({
    type:"SUV",
    color:"white"
});

//acessing an objects property
const vehicle = car.type;
console.log(`The car is an ${vehicle}`);

//constructors
/**
 * constructors are used to simplify the creation of multiple
 * the (this keyword is used to create new objects)
 */
function House(color,address,street){
    this.color = color;
    this.address=address;
    this.street=street
}

//accessing object properties
const majataHouse = new House("red","Chamba Valley,Lusaka","Mukwa Street");
const euniceHouse = new House("blue","Livingstone,Some Neighbourhood","Some Road");
console.log(majataHouse);
console.log(euniceHouse);

//methods in objects
const methodObject = new Object ({
    add:function addNumber(){
        let x = 10;
        let y = 10;
        console.log(x+y);
    }
});

math = methodObject.add();



