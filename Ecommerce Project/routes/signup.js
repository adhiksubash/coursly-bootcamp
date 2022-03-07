import { Router } from "express";
import signupController from "../controllers/signupController.js";

const signupObj = signupController();
const router = Router();

router.post("/user", signupObj.signupUser);
router.post("/customer", signupObj.signupCustomer);

export default router;
