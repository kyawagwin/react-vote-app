import React from "react";

import Product from './Product.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div className="ui unstackable items">
                <Product />
            </div>
        )
    }
}