from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
from typing import List

app = FastAPI()

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Update with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Import and include your routes



# Connect to SQLite database
conn = sqlite3.connect('database.db', check_same_thread=False)
cursor = conn.cursor()

# Create tables
cursor.execute('''
CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL,
    image TEXT
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS product_categories (
    product_id INTEGER,
    category_id INTEGER,
    FOREIGN KEY (product_id) REFERENCES products (id),
    FOREIGN KEY (category_id) REFERENCES categories (id)
)
''')
conn.commit()

class Category(BaseModel):
    id: int
    name: str

class Product(BaseModel):
    id: int
    name: str
    description: str
    price: float
    image: str
    categories: List[int]

# FastAPI Endpoints
@app.post("/categories/", response_model=Category)
def create_category(category: Category):
    cursor.execute("INSERT INTO categories (name) VALUES (?)", (category.name,))
    conn.commit()
    category.id = cursor.lastrowid
    return category

@app.post("/products/", response_model=Product)
def create_product(product: Product):
    cursor.execute("INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)",
                   (product.name, product.description, product.price, product.image))
    product.id = cursor.lastrowid
    for category_id in product.categories:
        cursor.execute("INSERT INTO product_categories (product_id, category_id) VALUES (?, ?)",
                       (product.id, category_id))
    conn.commit()
    return product

@app.get("/products/", response_model=List[Product])
def get_products():
    cursor.execute('''
    SELECT p.id, p.name, p.description, p.price, p.image, group_concat(pc.category_id)
    FROM products p
    LEFT JOIN product_categories pc ON p.id = pc.product_id
    GROUP BY p.id
    ''')
    rows = cursor.fetchall()
    products = []
    for row in rows:
        product = {
            "id": row[0],
            "name": row[1],
            "description": row[2],
            "price": row[3],
            "image": row[4],
            "categories": [int(cid) for cid in row[5].split(",")] if row[5] else []
        }
        products.append(product)
    return products

def fetch_categories():
    cursor.execute("SELECT id, name FROM categories")
    categories = cursor.fetchall()
    return categories

@app.get("/categories/", response_model=List[Category])
def get_categories():
    categories = fetch_categories()
    return [{"id": category[0], "name": category[1]} for category in categories]


@app.get("/products/", response_model=List[Product])
def get_products():
    cursor.execute('''
    SELECT p.id, p.name, p.description, p.price, p.image, group_concat(pc.category_id)
    FROM products p
    LEFT JOIN product_categories pc ON p.id = pc.product_id
    GROUP BY p.id
    ''')
    rows = cursor.fetchall()
    products = []
    for row in rows:
        product = {
            "id": row[0],
            "name": row[1],
            "description": row[2],
            "price": row[3],
            "image": row[4],
            "categories": [int(cid) for cid in row[5].split(",")] if row[5] else []
        }
        products.append(product)
    return products
