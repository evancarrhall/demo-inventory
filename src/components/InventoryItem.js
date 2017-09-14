import React from 'react';

class InventoryItem extends React.Component {
    
    render() {
        return(
            <li className="item">
                <p className="itemName">{this.props.item.name}</p>
                <p className="itemStock">{"("+this.props.item.stock+")"}</p>
                <p className="itemPrice">{"$" + this.props.item.price}</p>
            </li>
        );
    }
}

export default InventoryItem;