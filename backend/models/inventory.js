// models/inventory.js

const inventoryModel = {
    itemname: '',        // Name of the inventory item
    quantity: 0,         // Available quantity
    reorderlevel: 0,     // When to reorder
    unitprice: 0,        // Price per unit
    totalvalue: 0,       // Total value of the inventory
};

const updateInventory = (data) => {
    return {
        ...inventoryModel,
        ...data,
        totalvalue: data.quantity * data.unitprice,
    };
};

module.exports = {
    inventoryModel,
    updateInventory,
};
