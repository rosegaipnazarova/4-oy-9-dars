const {read_file, write_file} = require("..api/file-system")

const uuid = require("uuid")

const getAllProducts = async(req, res) =>{
    try{
        const product = read_file("product.json")
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }


}

const getOneProduct = async (req, res) =>{
    try{
        const {id} = req.params
        const product = read_file("product.json")

        const foundedProduct = product.find((item) => item.id ===id)

        if (!foundedProduct) {
            return res.json({
                message : "Not found"
            })
            
        }

        res.status(500).json(foundedProduct)
    }catch(error){
        res.status(500).json({
            message: error.message
        })

    }
}


const addProduct = async (req, res) =>{
    try{
        const {title, price, desc} = req.body

        const product = read_file("product.json")

        product.push({
            id: uuid.v4(),
            image: "image/one.jpeg",
            title,
            price,
            desc,
        })

        write_file("product.json", product)
        res.status(200).json({
            message: "Added new product"
        })


    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}


const updateProduct = async (req, res) =>{
try{
    const {id} = req.params

    const {title, price, desc} = req.body

    const product = read_file("product.json")

    const foundedProduct = product.find((item) => item.id ===id)

    if (!foundedProduct) {
        return res.json({
            message: "Not found"
        })
        
    }

product.forEach((item,idx) =>{
    if(item.id === id){
        item.title = title ? title : item.title
        item.price = price ? price : item.price
        item.desc = desc ? desc : item.desc
    }

})
write_file("product.json",product)
  res.status(200).json({
            message: "Updated product"
        })
    } catch (error){
    res.status(500).json({
            message: error.message
        })
}
}


const deleteProduct = async (req, res) =>{
    try{
        const {id} = req.params
         const product = read_file("product.json")

    const foundedProduct = product.find((item) => item.id ===id)

    if(!foundedProduct){
         return res.json({
            message: "not found"
        })
    }

    product.forEach((item,idx) =>{
        if (item.id === id) {
            product.splice(idx,1)
            
        }
    })

    write_file("product.json",product)
      res.status(200).json({
            message: "Delete product"
        })

    }catch(error){
       res.status(500).json({
            message: error.message
        }) 
    }
}
module.exports = {
    getAllProducts,
    getOneProduct,
    addProduct,
    updateProduct,
    deleteProduct
}