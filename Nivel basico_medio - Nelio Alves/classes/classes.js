class Product {
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    total() {
        return this.price * this.quantity;
    }

    add(amount) {
        this.quantity += amount;
    }

    remove(amount) {
        if(this.quantity >= amount){
            this.quantity -= amount;
        }
    }

    label(){
        return "Dados: " + this.name + "," + this.price.toFixed(2);
    }
}

const p1 = new Product("monitor", 800.00, 10)
const p2 = new Product("Mouse", 50.0, 4)

console.log(p1)
console.log(p2)