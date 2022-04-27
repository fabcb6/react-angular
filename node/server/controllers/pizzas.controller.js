const Pizzas = require('../models/pizzas');
const { randomUUID } = require('make-random')

exports.getAll = async (req, res) => {
    try {
        const pizzas = await Pizzas.find().sort({ name: 'asc' });
        res.json({
            status: true,
            pizzas
        });
    } catch (error) {
        console.log(error);
    }
};
exports.get = async (req, res) => {
    const { params } = req;
    const { id } = params;
    try {
        const pizzas = await Pizzas.findById(id);
        res.json({
            status: true,
            pizzas
        });
    } catch (error) {
        console.log(error);
    }
};
exports.create = async (req, res) => {
    const { body } = req;
    const { name, price, ingredients } = body;
    try {
        const _id = await randomUUID();
        const newPizzas = new Pizzas({
            _id,
            name, 
            price, 
            ingredients,
            created_on: new Date()
        });
        await newPizzas.save();
        res.json({
            status: true,
            msg: 'Pizza inserted successfully',
            'pizzas': [newPizzas]
        });
    } catch (error) {
        console.log(error);
    }
};
exports.update = async (req, res) => {
    const { params, body } = req;
    const { id } = params;
    try {
        await Pizzas.findByIdAndUpdate(id, body, { new: true });
        res.json({
            status: true,
            msg: 'Pizza updated successfully'
        });
    } catch (error) {
        console.log(error);
    }
};
exports.delete = async (req, res) => {
    const { params } = req;
    const { id } = params;
    try {
        await Pizzas.findByIdAndDelete(id);
        res.json({
            status: true,
            msg: 'Pizza deleted without problems'
        });
    } catch (error) {
        console.log(error);
    }
};