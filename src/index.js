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
                <img src={redux} className="reduxLogo" alt="redux" />
              </div>
              <h2>React/Redux Inventory Demo</h2>
            </div>
            <FilterableInventoryTable items={INVENTORY_ITEMS} />
        </div>

    );
  }
}

class FilterableInventoryTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: "",
      collapsedDepartments: new Set(),
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleCollapseClick = this.handleCollapseClick.bind(this);
  }

  handleSearchChange(e) {
    this.setState({search: e.target.value});
  }

  handleCollapseClick(departmentName) {
    let collapsedDepartments = this.state.collapsedDepartments;
    collapsedDepartments.has(departmentName) ?
      collapsedDepartments.delete(departmentName) : collapsedDepartments.add(departmentName);
    
    this.setState({collapsedDepartments: collapsedDepartments});
  }

  isCollapsed(departmentName) {
    const collapsedDepartments = this.state.collapsedDepartments;
    return collapsedDepartments.has(departmentName) ? true : false;
  }

  inventorySorter(first, second) {
    if (first.department > second.department)
      return 1;
    if (first.department < second.department)
      return -1;
    if (first.name > second.name)
      return 1;
    if (first.name < second.name)
      return -1;
    return 0;
  }

  render() {
    const items = this.props.items;
    const searchText = this.state.search;

    items.sort(this.inventorySorter);

    let currentDepartmentName = items[0].department;
    let currentDepartmentItems = [];
    let departments = [];

    // group items by department and pass them down as props to Department components
    for(const item of items) {

      if(currentDepartmentName !== item.department) {
        // push a complete Department component to departments list
        const department_component = <Department 
          name={currentDepartmentName}
          items={currentDepartmentItems}
          searchText={searchText}
          isCollapsed={this.isCollapsed(currentDepartmentName)}
          handleCollapseClick={this.handleCollapseClick}
        />

        departments.push(department_component);
        currentDepartmentName = item.department;
        currentDepartmentItems = [item];

      } else {
        // push item to department
        currentDepartmentItems.push(item);
      }
      
      if (items.indexOf(item) === items.length-1 && currentDepartmentName === item.department) {
        // corner case for last item in items
        const department_component = <Department 
          name={currentDepartmentName}
          items={currentDepartmentItems}
          searchText={searchText}
          isCollapsed={this.isCollapsed(currentDepartmentName)}
          handleCollapseClick={this.handleCollapseClick}
        />
        departments.push(department_component); 
      }

    }

    return(
      <div className="groceryList">
        <input id="search" type="text" value={searchText} onChange={this.handleSearchChange} />
        <ul>{departments}</ul>
      </div>
    );
  }
}

class Department extends React.Component {

  render() {
    const name = this.props.name;
    const items = this.props.items;
    const searchText = this.props.searchText;
    const isCollapsed = this.props.isCollapsed;

    let collapseToken = "<";
    let itemList = null;
    if(!isCollapsed) {
      collapseToken = ">";
      // build Item components and push to itemList
      const rows = [];
      for(const item of items) {
        if(searchText !== null && item.name.toUpperCase().indexOf(searchText.toUpperCase()) !== -1)
          rows.push(<InventoryItem item={item} />);
      }
      itemList = <ul>{rows}</ul>;
    }

    const partial = this.props.handleCollapseClick;
    const handleCollapseClick = () => partial(name);

    return(
      <div className="department">
        <div className="departmentHeader">
          <h2>{name}</h2>
          <div className="collapseButton" onClick={handleCollapseClick}>{collapseToken}</div>
        </div>
        {itemList}
      </div>
    );
  }
}

class InventoryItem extends React.Component {

  render() {
    return(
      <li className="item">{this.props.item.name}</li>
    );
  }
}


// ------------------------


const INVENTORY_ITEMS = [
  {department: "Sporting Goods", name: "Football", price: 16.99, stock: 23},
  {department: "Sporting Goods", name: "Baseball", price: 16.99, stock: 15},
  {department: "Sporting Goods", name: "Rugby Ball", price: 16.99, stock: 13},
  {department: "Sporting Goods", name: "Excercise Ball", price: 16.99, stock: 18},
  {department: "Sporting Goods", name: "Hockey Stick", price: 16.99, stock: 8},
  {department: "Sporting Goods", name: "Hockey Puck", price: 16.99, stock: 22},
  {department: "Footwear", name: "Yeezy Boost 350 \"Zebra\"", price: 16.99, stock: 0},
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


ReactDOM.render(<App />, document.getElementById('root'));
