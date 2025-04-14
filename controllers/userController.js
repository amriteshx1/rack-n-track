const db = require('../database/queries');

exports.homePageHandle = (req, res) => {
    res.render('index', { title: 'Home' });
}

exports.categoryPageHandle = async (req, res) => {

    const data = await db.getAllCategories();
    res.render('category', { title: 'Category Page', data: data });
}

exports.viewItemsByCategory = async (req,res) => {
    const items = await db.getAllItems(req.params.id);
    res.render('item', { title: 'Item Page', data: items, categoryId: req.params.id });
}

exports.getNewCategory = (req,res) => {
    res.render('formCategory', {title: 'Category Page'});
}

exports.postNewCategory = async (req,res) => {
    const name = req.body.name;
    const description = req.body.description;
    await db.addNewCategory(name, description);
    res.redirect("/category");
}

exports.getNewItem = (req,res) => {
    const Id = req.params.id;
    res.render("formItem", { title: "Item Page", Id: Id });
}

exports.postNewItem = async (req,res) => {
    const category_id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;
    await db.addNewItem(name, description, category_id);
    res.redirect(`/category/item/${category_id}`);
}

exports.getUpdateCategory = async(req, res) => {
    const id = req.params.id;
    const category = await db.getCategoryById(id);
    res.render('updateCategory', { title: 'Category Page', id, name: category.name });
}

exports.postUpdateCategory = async (req, res) => {
    const id = req.params.id;
    await db.updateCategoryName(id, req.body.name);
    res.redirect("/category");
}

exports.getUpdateItem = async(req, res) => {
    const id = req.params.id;
    const item = await db.getItemById(id);
    res.render('updateItem', {title: 'Item Page', id, name: item.name});
}

exports.postUpdateItem = async (req,res) => {
    const id = req.params.id;
    await db.updateItemName(id, req.body.name);
    res.redirect("/category");
}

exports.deleteCategory = async (req, res) => {
    const id = req.params.id;
    await db.deleteCategory(id);
    res.redirect("/category");
  };
  