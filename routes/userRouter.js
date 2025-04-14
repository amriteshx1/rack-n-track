const { Router } = require("express");
const userController = require('../controllers/userController');
const userRouter = Router();

userRouter.get("/", userController.homePageHandle);
userRouter.get("/category", userController.categoryPageHandle);
userRouter.get("/category/item/:id", userController.viewItemsByCategory);
userRouter.get("/category/create", userController.getNewCategory);
userRouter.post("/category/create", userController.postNewCategory);
userRouter.get("/category/item/:id/create", userController.getNewItem);
userRouter.post("/category/item/:id/create", userController.postNewItem);
userRouter.get("/category/update/:id", userController.getUpdateCategory);
userRouter.post("/category/update/:id", userController.postUpdateCategory);

module.exports = userRouter;