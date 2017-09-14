import React from 'react';
import logo from '../logo.svg';
import redux from '../redux.png';
import { connect } from 'react-redux';
import InventoryTableContainer from '../containers/InventoryTableContainer.js';

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
                <InventoryTableContainer items={this.props.items} searchText={this.props.searchText} />
            </div>
  
      );
    }
  }

  function mapStateToProps(state) {
    return {
      searchText: state.searchText
    };
  }

export default connect(mapStateToProps)(App);