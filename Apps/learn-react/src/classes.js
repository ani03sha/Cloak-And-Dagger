class House {
    constructor(doorColor) {
        this.doorColor = doorColor;
    };

    displayDoorColor = () => {
        console.log(`The door color is ${this.doorColor}`);
    };
}

class NewHouse extends House {
    changeDoorColor = (newDoorColor) => {
        this.doorColor = newDoorColor;
        console.log(`The door color has been set to ${newDoorColor}`);
    }
}

const house = new NewHouse('red');
console.log(house.changeDoorColor('purple'));