import React from 'react';

class InventoryItem extends React.Component {
    
    render() {
        return(
            <li className="item">{this.props.item.name}</li>
        );
    }
}

export default InventoryItem;