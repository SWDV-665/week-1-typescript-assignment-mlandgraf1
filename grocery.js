var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.itemInformation = name + ', ' + quantity + ', $' + price + ' ';
    }
    return Grocery;
}());
;
var item1 = new Grocery("Donuts", 4, 3.29);
var item2 = new Grocery("Apples", 2, 1.50);
var item3 = new Grocery("Dr. Pepper", 1, 4.99);
var itemList = [item1.itemInformation, item2.itemInformation, item3.itemInformation];
document.body.innerHTML = itemList.toString();
