import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import inventoryApp from './reducers/reducers.js'
import App from './components/App.js';

// ------------------------


const INVENTORY_ITEMS = [
  {department: "Sporting Goods", name: "Football", price: 16.99, stock: 23},
  {department: "Sporting Goods", name: "Baseball", price: 16.99, stock: 15},
  {department: "Sporting Goods", name: "Rugby Ball", price: 16.99, stock: 13},
  {department: "Sporting Goods", name: "Excercise Ball", price: 16.99, stock: 18},
  {department: "Sporting Goods", name: "Hockey Stick", price: 16.99, stock: 8},
  {department: "Sporting Goods", name: "Hockey Puck", price: 16.99, stock: 22},
  {department: "Footwear", name: "Yeezy Boost 350 \"Zebra\"", price: 289.99, stock: 0},
  {department: "Footwear", name: "Yeezy 750 Boost \"Core Black\"", price: 16.99, stock: 1},
  {department: "Footwear", name: "Yeezy 350 Boost \"Turtledove\"", price: 16.99, stock: 0},
  {department: "Apparel", name: "Space Dye Legend Hoodie", price: 16.99, stock: 9},
  {department: "Apparel", name: "Sportswear PO Fleece Hoodie", price: 16.99, stock: 9},
  {department: "Apparel", name: "Therma Full Zip Hoodie", price: 16.99, stock: 8},
  {department: "Apparel", name: "Dry Logo Rainstorm Printed Hoodie", price: 16.99, stock: 12},
  {department: "Footwear", name: "Air Yeezy \"Zen Grey\"", price: 16.99, stock: 0},
  {department: "Beverages", name: "Water", price: 16.99, stock: 0},
  {department: "Beverages", name: "Gatorade Cool Ice", price: 16.99, stock: 0},
  {department: "Water Bottles", name: "YETI 30 oz. Rambler Tumbler Cup", price: 16.99, stock: 0},
];

let store = createStore(
  inventoryApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App items={INVENTORY_ITEMS} />
  </Provider>,
  document.getElementById('root')
);
