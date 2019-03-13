class Grocery {
    itemInformation: string;
    constructor(public name: string, public quantity: number, public price: number) {
        this.itemInformation = name + ', ' + quantity + ', $' + price + ' ';
    }
};

let item1 = new Grocery("Donuts", 4, 3.29);
let item2 = new Grocery("Apples", 2, 1.50);
let item3 = new Grocery("Dr. Pepper", 1, 4.99)

var itemList = [item1.itemInformation, item2.itemInformation, item3.itemInformation];

document.body.innerHTML = itemList.toString();

