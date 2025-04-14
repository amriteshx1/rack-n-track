const db = require('../database/queries');

exports.homePageHandle = (req, res) => {
    res.render('index', { title: 'Homepage' });
}

exports.categoryPageHandle = async (req, res) => {

    const data = await db.getAllCategories();
    res.render('category', { title: 'Category Page', data: data });
}

exports.viewItemsByCategory = async (req,res) => {
    const items = await db.getAllItems(req.params.id);
    res.render('item', { title: 'Item Page', data: items });
}

exports.getNewCategory = (req,res) => {
    res.render('formCategory', {title: 'Form Page'});
}

exports.postNewCategory = async (req,res) => {
    const name = req.body.name;
    const description = req.body.description;
    await db.addNewCategory(name, description);
    res.redirect("/category");
}