# import sqlite3

# # Connect to SQLite database
# conn = sqlite3.connect('database.db', check_same_thread=False)
# cursor = conn.cursor()

# # Categories to insert
# categories = ['Mens Footwear', 'Womens Footwear', 'Childrens Footwear']

# # Insert categories
# for category in categories:
#     cursor.execute("INSERT INTO categories (name) VALUES (?)", (category,))
#     conn.commit()

# # Verify insertion
# cursor.execute("SELECT * FROM categories")
# rows = cursor.fetchall()
# for row in rows:
#     print(row)

# # Close the connection
# conn.close()

import sqlite3

# Connect to SQLite database
conn = sqlite3.connect('database.db', check_same_thread=False)
cursor = conn.cursor()

# Products to insert
products = [
    ('Nike Air Max', "Comfortable men's running shoes", 120, 'https://i.ibb.co/87jCGzt/Nike-Air-Max.webp', 1),
    ('Adidas Ultraboost', "High-performance men's running shoes", 180, 'https://i.ibb.co/grK4HGR/aiadas-ultraboost.jpg', 1),
    ('Puma Running Shoes', "Durable and stylish women's running shoes", 100, 'https://i.ibb.co/Q8XBMtw/Puma-running-shoes.jpg', 2),
    ('Reebok Classic', "Classic design women's sneakers", 90, 'https://i.ibb.co/n1P3XH9/istockphoto-1314374706-612x612.jpg', 2),
    ('Kids Converse', "Fun and colorful children's sneakers", 50, 'https://i.ibb.co/B3H9pRK/Kids-Converse.jpg', 3),
    ('Kids Nike Revolution', "Comfortable children's running shoes", 60, 'https://via.placeholder.com/150', 3),
    ('Under Armour Charged Pursuit 2', "Lightweight and breathable men's running shoes", 85, 'https://i.ibb.co/GCVTgp2/46545-right-feed1000.jpg', 1),
    ('ASICS Gel-Kayano 27', "Supportive and cushioned men's running shoes", 160, 'https://i.ibb.co/f1hfHsx/71716-right-feed1000.jpg', 2),
    ('New Balance Fresh Foam 1080v10', "Plush and comfortable men's running shoes", 150, 'https://i.ibb.co/LvbQB9c/43906-right-feed1000.jpg', 1),
    ('Brooks Ghost 13', "Smooth and balanced women's running shoes", 130, 'https://i.ibb.co/0Y5NkbR/41362-right-feed1000.jpg', 2),
    ('Saucony Ride 13', "Responsive and flexible women's running shoes", 120, 'https://i.ibb.co/XpyQwqm/46053-right-feed1000.jpg', 2),
    ('Hoka One One Clifton 7', "Light and comfortable women's running shoes", 140, 'https://i.ibb.co/JnJ0SHK/36392-right-feed1000.jpg', 2),
    ('Vans Kids Classic Slip-On', "Easy and stylish slip-on shoes for kids", 45, 'https://i.ibb.co/SdvKz0x/73699-right-feed1000.jpg', 3),
    ("Skechers Kids' Energy Lights", 'Light-up sneakers for kids', 55, 'https://i.ibb.co/L5S2wZB/47421-right-feed1000.gif', 3),
    ('Stride Rite Made2Play', 'Durable and washable shoes for kids', 40, 'https://i.ibb.co/JQq1DRb/38709-right-feed1000.jpg', 3),
    ('Nike Kids Air Max 90', 'Classic and comfortable sneakers for kids', 75, 'https://i.ibb.co/5YxyFSv/53496-right-feed1000.jpg', 3)
]

# Insert products and associate with categories
for product in products:
    cursor.execute("INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)", 
                   (product[0], product[1], product[2], product[3]))
    product_id = cursor.lastrowid
    cursor.execute("INSERT INTO product_categories (product_id, category_id) VALUES (?, ?)", 
                   (product_id, product[4]))
    conn.commit()

# Verify insertion
cursor.execute("SELECT * FROM products")
rows = cursor.fetchall()
for row in rows:
    print(row)

cursor.execute("SELECT * FROM product_categories")
rows = cursor.fetchall()
for row in rows:
    print(row)

# Close the connection
conn.close()

