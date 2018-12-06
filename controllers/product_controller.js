const ProductModel = require("./../database/models/product_model");

async function index(req, res) {
    const products = await ProductModel.find();
    res.render("products/index", { products });
}

function show(req, res) {
    res.send("show individual product");
}

function make(req, res) {
    res.render("products/make");
}

async function create(req, res) {
    const {name, categories, price} = req.body
    const product = await ProductModel.create({name, categories, price});

    res.redirect(`/products/${product._id}`);
}

function update(req, res) {
    res.send("update product");
}

function destroy(req, res) {
    res.send("delete product");
}

function edit(req, res) {
    res.send("show form to edit product");
}

module.exports = {
    index,
    show,
    make,
    create,
    update,
    destroy,
    edit
}