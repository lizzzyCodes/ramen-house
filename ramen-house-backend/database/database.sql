CREATE TABLE
  inventory (
    id SERIAL PRIMARY KEY,
    ingredientName VARCHAR(255),
    quantityAvailable INT,
    unit VARCHAR(50)
  )
CREATE TABLE
  sales (
    id SERIAL PRIMARY KEY,
    saleDate DATE NOT NULL,
    totalSales DECIMAL(10, 2) NOT NULL
  )
CREATE TABLE
  items_sold (
    id SERIAL PRIMARY KEY,
    saleId INT NOT NULL,
    itemName VARCHAR(255) quantity INT NOT NULL,
    pricePerUnit DECIMAL(10, 2) NOT NULL,
    totalPrice DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (saleId) REFERENCES sales (id) -- key linking to sales table
  )
  -- create_order → items_in_order → plate_customization
CREATE TABLE
  create_order (
    id SERIAL PRIMARY KEY,
    customerId INT NOT NULL,
    orderDate DATE NOT NULL,
    totalAmount DECIMAL(10, 2) NOT NULL
  )
CREATE TABLE
  items_in_order (
    id SERIAL PRIMARY KEY,
    orderId INT NOT NULL, -- links to parent order
    itemName VARCHAR(255) NOT NULL, -- ramen type
    quantity INT NOT NULL, -- how many bowls of ramen
    pricePerUnit DECIMAL(10, 2) NOT NULL,
    totalPrice DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (orderId) REFERENCES create_order (id) -- links to parent order
  )
CREATE TABLE
  plate_customization (
    id SERIAL PRIMARY KEY,
    itemId INT NOT NULL, -- links to parent item
    meat VARCHAR(255) NOT NULL,
    soupbase VARCHAR(255) NOT NULL,
    spicyLevel VARCHAR(255) NOT NULL,
    FOREIGN KEY (itemId) REFERENCES items_in_order (id) -- links to items in order table
  )
CREATE TABLE
  statusOfOrder (
    id SERIAL PRIMARY KEY,
    orderId INT NOT NULL,
    paymentStatus VARCHAR(255),
    cookingStatus VARCHAR(255), -- "order received", "prepared", "ready for pickup" 
    FOREIGN KEY (orderId) REFERENCES create_order (id) -- links to parent table
  );