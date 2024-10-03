CREATE TABLE sales(
    sale_id INT PRIMARY KEY,
    customer_id INT,
    flavor_id INT,
    quantity_sold INT,
    total_amount DECIMAL(10, 2)
    sale_date DATETIME
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
    FOREIGN KEY (flavor_id) REFERENCES ramen_flavors(flavor_id)
);

CREATE TABLE customers(
    customer_id INT PRIMARY KEY
    name VARCHAR(50)
);
