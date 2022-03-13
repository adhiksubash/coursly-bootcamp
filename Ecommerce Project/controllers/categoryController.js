import Category from "../models/category.js";

class CategoryController {
  async showAllCategory(req, res) {
    try {
      const data = await Category.find();
      res.status(200).send({ success: true, data: data });
    } catch (err) {
      res.status(500).json({ success: false, message: err });
    }
  }

  async getCategoryById(req, res) {
    try {
      const id = req.query?.id;
      const data = await Category.findOne({ _id: id });
      res.status(200).send({ success: true, data: data });
    } catch (err) {
      res.status(500).json({ success: false, message: err });
    }
  }
  async storeCategory(req, res) {
    try {
      const category = new Category(req.body);
      const data = await category.save();
      res
        .status(200)
        .json({ message: "Category Created Successfully", success: true });
    } catch (err) {
      res.status(500).json({ success: false, message: err });
    }
  }
}

export default CategoryController;
