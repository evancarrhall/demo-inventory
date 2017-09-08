import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import redux from './redux.png';

class App extends React.Component {
  render() {
    return (

        <div className="App">
            <div className="App-header">
              <div>
                <img src={logo} className="App-logo" alt="logo" />
                <img src={redux} alt="redux" className="reduxLogo" alt="redux" />
              </div>
              <h2>Grocery List Demo</h2>
            </div>
            <GroceryTable grocery_items={GROCERY_ITEMS} />
        </div>

    );
  }
}

class GroceryTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({search: e.target.value});
  }

  compareGroceryItems(first, second) {
    if (first.category > second.category)
      return 1;
    if (first.category < second.category)
      return -1;
    return 0;
  }

  render() {
    const grocery_items = this.props.grocery_items;
    grocery_items.sort(this.compareGroceryItems);
    const searchText = this.state.search;

    let currentCategories = {};
    let rows = [];
    for(const item of grocery_items) {

      if(item.name.indexOf(searchText) !== -1 || searchText === null) {
        if(!(item.category in currentCategories)) {
          rows.push(
            <GroceryCategory name={item.category} />
          );
          currentCategories[item.category] = true;
        }
  
        rows.push(
          <GroceryItem name={item.name} />
        );
      }
    }

    return(
      <div className="groceryList">
        <input id="search" type="text" value={searchText} onChange={this.handleChange} />
        <ul>{rows}</ul>
      </div>
    );
  }
}

class GroceryCategory extends React.Component {

  render() {
    return(
      <li className="category">{this.props.name}</li>
    );
  }
}


class GroceryItem extends React.Component {

  render() {
    return(
      <li className="item">{this.props.name}<input className="checkbox" type="checkbox" /></li>
    );
  }
}


// ------------------------


const GROCERY_ITEMS = [
  {category: "Produce", name: "1 quart berries"},
  {category: "Produce", name: "2 lemons"},
  {category: "Produce", name: "2 limes"},
  {category: "Produce", name: "1 melon"},
  {category: "Produce", name: "4 pieces oranges/apples/pears"},
  {category: "Produce", name: "1 bunch broccoli"},
  {category: "Produce", name: "1 bunch kale"},
  {category: "Produce", name: "2 bell peppers"},
  {category: "Produce", name: "2 sweet potatoes"},
  {category: "Produce", name: "6-8 ounces boneles chicken breast"},
  {category: "Bakery", name: "Whole wheat bread"},
  {category: "Dairy", name: "1 dozen eggs"},
  {category: "Dairy", name: "1/2 gallon of milk"},
  {category: "Dairy", name: "1 small container low-fat cottage cheese"},
  {category: "Dairy", name: "1 container crumbled feta cheese"},
  {category: "Bakery", name: "Naan flatbread"},
];


ReactDOM.render(<App />, document.getElementById('root'));
