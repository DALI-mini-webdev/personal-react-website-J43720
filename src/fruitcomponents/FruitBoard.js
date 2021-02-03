import React, { Component } from 'react';
import { Map } from 'immutable';
import FruitPosting from './FruitPosting';
class FruitBoard extends Component {
 constructor(props) {
   super(props);
   this.state = {
     Fruit: Map(),
     FruitID: 0,
     newFruitName: '',
     newFruitColor: '',
     newFruitImage: ''
   }
 }

 newFruitNameFunction = (event) => {
    this.setState({ newFruitName: event.target.value });
  }
  newFruitColorFunction = (event) => {
    this.setState({ newFruitColor: event.target.value });
  }
  newFruitImageFunction = (event) => {
    this.setState({ newFruitImage: event.target.value });
  }

  saveFruitInfo = () => {
    let FruitData = {
      name: this.state.newFruitName,
      color: this.state.newFruitColor,
      image: this.state.newFruitImage,
    }
    this.setState({
      Fruit: this.state.Fruit.set(this.state.FruitID, FruitData),
      FruitID: this.state.FruitID + 1,
    });
  }
 
 
 render() {
    
   return (
     <div>
       <p> this is the fruit board </p>
     </div>
   );
 }
}
export default FruitBoard;