import React, { Component } from 'react';
import { Map } from 'immutable';
import FruitPosting from './FruitPosting';
class FruitBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: Map(),
      fruitID: 0,
      newFruitName: '',
      newFruitFlavor: '',
      newFruitImage: '',
    }
  }




 delete =(id) => {
   this.setState({fruits: this.state.fruits.delete(id)})
 }

 save = (id, field) => {
   this.setState({fruits:this.state.fruits.update(id, (n) => {return Object.assign({}, n, field);})})
 }

 newFruitNameFunction = (event) => {
    this.setState({ newFruitName: event.target.value });
  }
  newFruitFlavorFunction = (event) => {
    this.setState({ newFruitFlavor: event.target.value });
  }
  newFruitImageFunction = (event) => {
    this.setState({ newFruitImage: event.target.value });
  }

  saveFruitInfo = () => {
    let fruitData = {
      name: this.state.newFruitName,
      flavor: this.state.newFruitFlavor,
      image: this.state.newFruitImage,
    }
    this.setState({
      fruits: this.state.Fruit.set(this.state.fruitID, fruitData),
      fruitID: this.state.fruitID + 1
    });

  }
 
 
  render() {
   const allFruits = this.state.fruits.entrySeq().map(
     ([id, fruit]) => {
       return ( 
         <FruitPosting 
            save={this.save}
            delete={this.delete}
            name={fruit.name}
            flavor={fruit.flavor}
            fruitURL={fruit.image}
            id={id}
         />
       );  
     }
   );
   return (
     <div>
       <p> this is the fruit board! </p>
       {allFruits}
       <p>Add a fruit!</p>
       <p>Enter Name:</p>
       <input type="text" value={this.state.newFruitName}
       onChange={this.newFruitNameFunction}/>

       <p>Enter Flavor:</p>
       <input type="text" value={this.state.newFruitFlavor}
       onChange={this.newFruitFlavorFunction}/>

       <p>Enter Image URL:</p>
       <input type="text" value={this.state.newFruitImage}
       onChange={this.newFruitImageFunction}/>

       <button onClick={this.saveFruitInfo}>Save!</button>
     </div>
   );
 }
}
export default FruitBoard;