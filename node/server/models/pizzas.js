const { Schema, model } = require('mongoose');

const schema = new Schema(
    {
        _id: String,
        name: String,
        created_on: Date,
        price: Number,
        ingredients: Array,
        picture: String
    },
    {},
    {
        collection: 'pizzas',
        timestamps: true,
        versionKey: false,
        strict: false
    }
);


module.exports = model('Pizza', schema);

