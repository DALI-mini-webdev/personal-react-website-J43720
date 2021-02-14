
import axios from 'axios'; 
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
  }
  fetchData = () => {
    axios.get(" https://poetrydb.org/random")
    .then((response) => {
      console.log(response);
      this.setState({data: response.data[0]})
    }).catch((error) => {
      console.log(error)
    })

};


renderData = () => {
    if(this.state.data) {
      return(
        <div>
          <div>Title: {this.state.data.title}</div>
          <div>By: {this.state.data.author}</div>
          {this.state.data.lines.map((line, idx) => {
            return(<div key ={idx}>{line}</div>)
          })}

        </div>
      )
    }else{
      return null
    }
  }
  render(){
    return (
      <div>
          <button onClick = {this.fetchData}>CLICK FOR RANDOM POEM</button>
          {this.renderData()}
      </div>
    ); 
  }
}

export default App;
