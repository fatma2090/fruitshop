import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Aktualisiert
import Navbar from './components/navbar';
import Home from './views/Home';
import Products from './views/Products';
import Cart from './views/Cart';

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Routes> {/* Ersetzt Switch durch Routes */}
                    <Route path="/" element={<Home />} /> {/* Verwendet element anstelle von component */}
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        );
    }
}

export default App;
