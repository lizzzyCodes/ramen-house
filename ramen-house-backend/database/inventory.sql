CREATE TABLE ramen_flavors(
    flavor_id INT,
    flavor_name VARCHAR(100) NOT NULL,
    soup_base_id INT,
    meat_id INT,
    spicy_level_id INT,
    price DECIMAL,
);

CREATE TABLE soup_base(
    soup_base_id INT,
    base_name VARCHAR(100)

CREATE TABLE meats(
    meat_id INT,
    meat_name VARCHAR(100) NOT NULL,
);

CREATE TABLE spicy_level(
    spicy_level_id INT,
    spicy_level INT, 
);

CREATE TABLE inventory(
    inventory_id INT,
    item_name VARCHAR(50)
    quantity INT
    supplier VARCHAR(100)
);