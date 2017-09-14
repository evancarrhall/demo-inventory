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

    render() {
        const items = this.props.items
        const searchText = this.props.searchText;

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
                    toggleDepartmentCollapse={this.props.toggleDepartmentCollapse}
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
                    toggleDepartmentCollapse={this.props.toggleDepartmentCollapse}
                />
                departments.push(department_component); 
            }
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