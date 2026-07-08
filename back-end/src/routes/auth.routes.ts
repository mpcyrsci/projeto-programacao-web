import { Router } from "express";
import { AuthentController } from "../controller/auth.controller";

const userControllerObj = new AuthentController();

const router = Router();

router.post("/login",userControllerObj.login);
router.post("/logout",userControllerObj.logout);
router.post("/create",userControllerObj.create);

export {router as userRouterObject};
