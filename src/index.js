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
      hiddenCategories: new Set(),
    }
    this.handleChange = this.handleChange.bind(this);
    this.hideCategory = this.hideCategory.bind(this);
    this.showCategory = this.showCategory.bind(this);
  }

  handleChange(e) {
    this.setState({search: e.target.value});
  }

  hideCategory(categoryName) {
    const hiddenCategories = this.state.hiddenCategories;
    hiddenCategories.add(categoryName);
    this.setState({hiddenCategories: hiddenCategories})
  }

  showCategory(categoryName) {
    const hiddenCategories = this.state.hiddenCategories;
    hiddenCategories.delete(categoryName);
    this.setState({hiddenCategories: hiddenCategories})
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
    const searchText = this.state.search;
    const hiddenCategories = this.state.hiddenCategories;

    grocery_items.sort(this.compareGroceryItems);

    let currentCategories = {};
    let rows = [];
    for(const item of grocery_items) {

    if(!(hiddenCategories.has(item.category))) {

      if(item.name.indexOf(searchText) !== -1 || searchText === null) {
        if(!(item.category in currentCategories)) {
          rows.push(
            <GroceryCategory name={item.category} handleHideClick={this.hideCategory} />
          );
          currentCategories[item.category] = true;
        }
        rows.push(
          <GroceryItem name={item.name} />
        );
      }

    } else {

      if(item.name.indexOf(searchText) !== -1 || searchText === null) {
        if(!(item.category in currentCategories)) {
          rows.push(
            <GroceryCategoryHidden name={item.category} handleShowClick={this.showCategory} />
          );
          currentCategories[item.category] = true;
        }
      }
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
    const name = this.props.name;
    const partial = this.props.handleHideClick;
    const handleHideClick = function() { partial(name); }
    
    return(
      <li className="category">{name}<p onClick={handleHideClick}>hide</p></li>
    );
  }
}

class GroceryCategoryHidden extends React.Component {
  
    render() {
      const name = this.props.name;
      const partial = this.props.handleShowClick;
      const handleShowClick = function() { partial(name); }

      return(
        <li className="category">{name}<p onClick={handleShowClick}>show</p></li>
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
  {category: "Bakery", name: "1 loaf whole wheat bread"},
  {category: "Dairy", name: "1 dozen eggs"},
  {category: "Dairy", name: "1/2 gallon of milk"},
  {category: "Dairy", name: "1 small container low-fat cottage cheese"},
  {category: "Dairy", name: "1 container crumbled feta cheese"},
  {category: "Bakery", name: "1 package naan flatbread"},
];


ReactDOM.render(<App />, document.getElementById('root'));
