import React, { Component } from 'react';
import ShoppingCart from '../components/shopping-cart';

class Cart extends Component {
    state = {
        items: []
    }
    
    componentDidMount() {
        const items = JSON.parse(localStorage.getItem('cartItems')) || [];
        this.setState({ items });
    }

    render() {
        return <ShoppingCart items={this.state.items} />;
    }
}

export default Cart;
