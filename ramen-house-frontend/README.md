# Kiosk Application Documentation

## Overview

This documentation provides an overview of the kiosk application, detailing the main pages and their functionalities.

### Main Page

**URL**: [http://localhost:3000](http://localhost:3000/)

- This is the landing page for the kiosk application.
- Users are greeted with an introduction and a button labeled "Tap to Order"
- Clicking this button redirects users to the menu page.

### Menu Page

**URL**: http://localhost:3000/menu

- The menu page displays a list of available ramen items.
- Each item is presented as a card, showing details such as:
    - Title of the ramen dish
    - Description
    - Image
    - Price
- Each card has a link to a customization page for that specific ramen item.

### Customization and Ordering Page

**URL**: http://localhost:3000/menu-item/1

- This page allows users to customize their selected ramen dish.
- Users can modify options such as:
    - Meat selections
    - Broth selection
    - Spice levels
- The interface includes:
    - An item counter to adjust the quantity of ramen
    - A button to add the customized ramen to the cart
- The total price is dynamically calculated based on user selections.
- The param 1 is a unique key in order to render customized data to the user

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
