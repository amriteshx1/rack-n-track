const pool = require("./pool");

//READ
async function getAllCategories() {
    const { rows } = await pool.query("SELECT * FROM categories");
    return rows;
}

async function getAllItems(id) {
    const { rows } = await pool.query("SELECT * FROM items WHERE category_id = $1", [id]);
    return rows;
}

async function getCategoryById(id) {
    const { rows } = await pool.query("SELECT * FROM categories WHERE id = $1", [id]);
    return rows[0];
}  

//CREATE
async function addNewCategory(name, description){
  await pool.query("INSERT INTO categories (name, description) VALUES ($1, $2)",[name, description]);
}

async function addNewItem(name, description, category_id){
    await pool.query("INSERT INTO items (name, description, category_id) VALUES ($1, $2, $3)", [name, description, category_id]);
}

//UPDATE
async function updateCategoryName(id, name){
    await pool.query("UPDATE categories SET name = $1 WHERE id = $2", [name, id]);
}

async function updateItemName(id, name){
    await pool.query("UPDATE items SET name = $1 WHERE id = $2", [name, id]);
}

//DELETE
async function deleteCategory(id){
    await pool.query("DELETE FROM categories WHERE id = $1", [id]);
}

async function deleteItem(id){
    await pool.query("DELETE FROM items WHERE id = $1", [id]);
}

module.exports = {
  getAllCategories,
  getAllItems,
  getCategoryById,
  addNewCategory,
  addNewItem,
  updateCategoryName,
  updateItemName,
  deleteCategory,
  deleteItem
};