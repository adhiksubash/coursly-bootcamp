import Product from "../models/product.js";

class ProductController {
  showAllProduct(req, res) {
    Product.find()
      .then((data) => {
        res.status(200).send({ success: true, data: data });
      })
      .catch((err) => {
        res.status(500).json({ success: false, message: err });
      });
  }

  getProductById(req, res) {
    const id = req.query?.id;
    Product.findOne({ _id: id })
      .then((data) => {
        res.status(200).send({ success: true, data: data });
      })
      .catch((err) => {
        res.status(500).json({ success: false, message: err });
      });
  }
  storeProduct(req, res) {
    const {
      name,
      stock,
      price,
      brand,
      supplier,
      description,
      imageUrl,
      discount,
      status,
      shortDescription,
      categorySelect,
      slug
    } = req.body;
    const product = new Product({
      name,
      stock,
      price,
      brand,
      supplier,
      description,
      imageUrl,
      discount,
      status,
      shortDescription,
      slug,
      category: categorySelect
    });
    product
      .save()
      .then((result) => {
        res
          .status(200)
          .json({ message: "Product Created Successfully", success: true });
      })
      .catch((err) => {
        res.status(500).json({ message: err, success: false });
      });
  }
}

export default ProductController;
