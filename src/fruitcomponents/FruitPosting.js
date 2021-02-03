import React from 'react';

const FruitPosting = (props) => {
    return (
        <div>
            <p>{this.props.name}, {this.props.color}</p>
            <img src={ this.props.FruitURL } alt='Image'/>
        </div>
    );
}

export default FruitPosting;