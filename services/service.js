const Item = require("../model/model");


exports.getAllItems = async () => {
    return await Item.find();
};


exports.createItem = async (itemData) => {
    const item = new Item(itemData);
    return await item.save();
};

exports.updateItem = async (id, itemData) => {
    return await Item.findByIdAndUpdate(id, itemData, { new: true });
};


exports.deleteItem = async (id) => {
    return await Item.findByIdAndDelete(id);
};
