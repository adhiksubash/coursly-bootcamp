import express from "express";
import CategoryController from "../controllers/categoryController.js";

const router = express.Router();
const category = new CategoryController();

router.post("/category/save", category.storeCategory);
router.get("/category/all", category.showAllCategory);
router.get("/category", category.getCategoryById);

export default router;
