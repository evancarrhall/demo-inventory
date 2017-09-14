import React from 'react';
import Department from './Department.js';

class InventoryTable extends React.Component {
    
    isCollapsed(departmentName) {
        const collapsedDepartments = this.props.collapsedDepartments;
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

    groupItemsByDepartment(arr, property = "department") {
        // reduces an array of item objects into a dictionary of item arrays grouped by department
        return arr.reduce(function(groupedItems, currentItem) {
          if (!groupedItems[currentItem[property]])
            groupedItems[currentItem[property]] = [];
          groupedItems[currentItem[property]].push(currentItem);
          return groupedItems;
        }, {});
    }

    render() {
        const items = this.props.items
        const searchText = this.props.searchText;

        items.sort(this.inventorySorter);

        let departments = [];

        const groupedItems = this.groupItemsByDepartment(items);
        for (let depName in groupedItems) {                
            departments.push(
                <Department 
                    name={depName}
                    items={groupedItems[depName]}
                    searchText={searchText}
                    isCollapsed={this.isCollapsed(depName)}
                    toggleDepartmentCollapse={this.props.toggleDepartmentCollapse}
                />
            );
        }

        return(
            <div className="groceryList">
            <input id="search" type="text" value={searchText} onChange={this.props.changeSearchText} />
            <ul>{departments}</ul>
            </div>
        );
    }
}

export default InventoryTable;