import React, { Component } from 'react';
import axios from 'axios';
import Product from '../components/product';

class Products extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        this.fetchProducts();
    }

    //CRUD Read: show cart
    fetchProducts = async () => {
        const response = await axios.get('http://localhost:5000/products');
        this.setState({ products: response.data });
    }

    //CRUD Create: for adding fruits to cart
    addItem = async (product) => {
        let items = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItem = items.find(item => item.name === product.name);

        if (existingItem) {
            existingItem.amount += 1; //CRUD Update: for updating amount of a fruit
        } else {
            items.push({ ...product, amount: 1 });
        }

        localStorage.setItem('cartItems', JSON.stringify(items));
        alert(`${product.name} added to cart`);
    }

    render() {
        return (
            <div className="product-container">
                {this.state.products.map(product => (
                    <Product
                        key={product.id}
                        onAdd={() => this.addItem(product)}
                        img={product.img || "default.jpg"} 
                        title={product.name}
                        description={product.description}
                    />
                ))}
            </div>
        );
    }
}

export default Products;
