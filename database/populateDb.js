require("dotenv").config();
const { Client } = require("pg");

const SQL = `
   CREATE TABLE categories (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category_id INT REFERENCES categories(id) ON DELETE CASCADE
);
 
INSERT INTO categories (name, description)
VALUES
('Electronics', 'Devices like phones, laptops, etc.'),
('Groceries', 'Daily consumables like fruits, vegetables, etc.'),
('Books', 'Books from various genres');

INSERT INTO items (name, description, category_id)
VALUES
('Laptop', 'A powerful laptop', 1),
('Smartphone', 'A sleek smartphone', 1),
('Apple', 'Fresh red apples', 2),
('Banana', 'Fresh ripe bananas', 2),
('Fiction Book', 'An exciting fiction novel', 3),
('Cookbook', 'A cookbook with delicious recipes', 3);

`;

async function main(){
const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
    });
    try {
        await client.connect();
        await client.query(SQL);
        console.log("✅ Table created and messages inserted!");
      } catch (err) {
        console.error("❌ Error running script:", err);
      } finally {
        await client.end();
      }
}

main();