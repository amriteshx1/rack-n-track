const { Router } = require("express");
const userController = require('../controllers/userController');
const userRouter = Router();

userRouter.get("/", userController.homePageHandle);
userRouter.get("/category", userController.categoryPageHandle);
userRouter.get("/category/item/:id", userController.viewItemsByCategory);
userRouter.get("/category/create", userController.getNewCategory);
userRouter.post("/category/create", userController.postNewCategory);


module.exports = userRouter;