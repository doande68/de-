class Product{
    id
    name
    img
    quantity
    price

    constructor(id, name, img, quantity, price) {
        this.id = id;
        this.name = name;
        this.img = img
        this.quantity = quantity;
        this.price = price;
    }

    get id() {
        return this.id;
    }

    set id(value) {
        this.id = value;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }
    get img(){
        return this.img
    }
    set img(value){
        this.img = value;
    }

    get quantity() {
        return this.quantity;
    }

    set quantity(value) {
        this.quantity = value;
    }

    get price() {
        return this.price;
    }

    set price(value) {
        this.price = value;
    }
}