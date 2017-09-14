import React from 'react';
import InventoryItem from './InventoryItem.js';

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

        const partial = this.props.toggleDepartmentCollapse;
        const toggleDepartmentCollapse = () => { partial(name) };

        return(
            <div className="department">
            <div className="departmentHeader">
                <h2>{name}</h2>
                <div className="collapseButton" onClick={toggleDepartmentCollapse}>{collapseToken}</div>
            </div>
            {itemList}
            </div>
        );
    }
}

export default Department;