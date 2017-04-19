import React from "react";

export default class Product extends React.Component {
    render() {
        return (
            <div className="items">
                <div className="image">
                    <img src={require("../images/products/image-aqua.png")} alt="image aqua" />
                    <div className="middle aligned content">
                        <div className="description">
                            <a>Fort Knight</a>
                            <p>Authentic renaissance actors, delivered in just two weeks.</p>
                        </div>
                        <div className='extra'>
                            <span>Submitted by:</span>
                            <img className='ui avatar image' src={require("../images/avatars/daniel.jpg")} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}