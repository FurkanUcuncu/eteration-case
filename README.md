# eteration-case

## Available Scripts

### `yarn install`

Installs the packages that used in this project.

In the project directory, you can run:

### `yarn ios`

Runs the app in the development mode using ios simulator.

### `yarn android`

Runs the app in the development mode using android simulator.

### `yarn test`

Launches all the tests and shows the coverage for every file.

## About the project

-For the ui library react-native-paper is used.
-For the state management redux-toolkit is used.
-To keep datas on the device redux-persist is used.

Project's goal is listing products on homepage and then users can interact with those products. 

Features:
-Users can add those products to favorites and visualize them on favorites page.
-Users can also add products to their carts and change the quantity of them inside cart page. Also they can remove a product from cart page. 
-Users can filter products depending on product's min price, max price or model. Also they can reset the filters.
-When opening the app for the first time only 12 products is visible. If user scrolls down to the bottom of the page additional contents are loading and then they can see more products(Infinite Scrolling). 

