import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={process.env.PUBLIC_URL + "/img/" + this.props.img} alt={this.props.title} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <button onClick={this.props.onAdd} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        );
    }
}

export default Product;
