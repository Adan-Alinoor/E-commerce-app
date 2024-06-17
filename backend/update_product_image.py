# File: update_product_image.py

import requests

# URL of the FastAPI endpoint
url = "http://localhost:8000/products/6"

# Data to update the image URL
data = {
    "new_image": "https://i.ibb.co/FwG2Vwz/46615-right-feed1000.jpg"
}

# Sending PUT request to update the image URL for the product with ID 6
response = requests.put(url, json=data)

if response.status_code == 200:
    print("Product image updated successfully")
else:
    print("Failed to update product image", response.json())
