const Model = require("../Model/products");

module.exports.getProductsData = async (req, res) => {
    try {
        const getDatas = await Model.find();
        res.send(getDatas);
    } catch (error) {
        console.error(`Error of Controller/products.js/getProductsData`, error);
    }
}

module.exports.getProductData = async (req, res) => {
    try {
        const getData = await Model.find({ _id: req.params.id });
        res.send(getData);
    } catch (error) {
        console.error(`Error of Controller/products.js/getProductData`, error);
    }
}

module.exports.addProductData = async (req, res) => {
    try {
        const addData = await new Model(req.body).save();
        res.send(addData);
    } catch (error) {
        console.error(`Error of Controller/products.js/getProductData`, error);   
    }
}