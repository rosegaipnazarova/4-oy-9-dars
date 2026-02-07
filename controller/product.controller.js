
const {read_file} = require("..api/file-system")
const getAllProduct = async (req,res) => {

try{
    const product = read_file("product.json")
    res.render("index", {product})
}catch(error){
    res.status(500).json({
        message: error.message
    })
}

}


const getOneProduct = async (req,res) => {

try{

}catch(error){
    res.status(500).json({
        message: error.message
    })
}

}

const addProduct = async (req,res) => {

try{

}catch(error){
    res.status(500).json({
        message: error.message
    })
}

}

const updateProduct = async (req,res) => {

try{

}catch(error){
    res.status(500).json({
        message: error.message
    })
}

}

const deleteProduct = async (req,res) => {

try{

}catch(error){
    res.status(500).json({
        message: error.message
    })
}

}

module.exports = {
    getAllProduct,
    getOneProduct,
    addProduct,
    updateProduct,
    deleteProduct
}