exports.homePageHandle = (req, res) => {
    res.render('index', { title: 'Homepage' });
}

exports.categoryPageHandle = (req, res) => {
    res.render('category', { title: 'Category Page' });
}

exports.itemPageHandle = (req, res) => {
    res.render('item', { title: 'Item Page' });
}
