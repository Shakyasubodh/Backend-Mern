const itemService = require("../services/service");

exports.getItems = async (req, res) => {
    try {
        const items = await itemService.getAllItems();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "Error fetching items" });
    }
};

exports.createItem = async (req, res) => {
    try {
        const newItem = await itemService.createItem(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: "Error creating item" });
    }
};

exports.updateItem = async (req, res) => {
    try {
        const updatedItem = await itemService.updateItem(req.params.id, req.body);
        res.status(200).json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: "Error updating item" });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        await itemService.deleteItem(req.params.id);
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting item" });
    }
};
