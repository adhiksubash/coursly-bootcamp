import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();
const user = new userController();

router.get("/user/showAllUser", user.showAllUser);
router.get("/user/getUserById", user.getUserById);
router.get("/user/getUserByUsername", user.getUserByUsername);

export default router;
