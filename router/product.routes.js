const {Router} = require("express")

const productRouter = Router

productRouter.get("./get_all_products",getAllProduct)
productRouter.get("./get_one_product/:id",getOneProduct)
productRouter.post("./add_product",addProduct)
productRouter.put("./update_product",updateProduct)
productRouter.delete("./delete_product",deleteProduct)

module.exports = productRouter