const Item = require("../model/model");

// Get all items
exports.getAllItems = async () => {
    return await Item.find();
};

// Create a new item
exports.createItem = async (itemData) => {
    const item = new Item(itemData);
    return await item.save();
};

// Update an item (except createdDate)
exports.updateItem = async (id, itemData) => {
    return await Item.findByIdAndUpdate(id, itemData, { new: true });
};

// Delete an item
exports.deleteItem = async (id) => {
    return await Item.findByIdAndDelete(id);
};
