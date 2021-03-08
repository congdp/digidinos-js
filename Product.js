class Product {
    constructor(id, name, categoryId, saleDate, quantity) {
        this.id = id;
        this.name = name;
        this.categoryId = categoryId;
        this.saleDate = saleDate;
        this.quantity = quantity;
        this.isDelete = false;
    }
    getId() {
        return this.id;
    }
    delete() {
        this.isDelete = true;
    }
}

module.exports = Product;