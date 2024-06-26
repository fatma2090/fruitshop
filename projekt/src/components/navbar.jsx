import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Importiere Link

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">My Store</Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
