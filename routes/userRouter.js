const { Router } = require("express");
const userController = require('../controllers/userController');
const userRouter = Router();

userRouter.get("/", userController.homePageHandle);
userRouter.get("/category", userController.categoryPageHandle);
userRouter.get("/category/item/:id", userController.viewItemsByCategory);


module.exports = userRouter;