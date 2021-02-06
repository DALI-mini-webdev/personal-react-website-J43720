
import React, { Component } from 'react';


class FruitPosting extends Component{
    constructor(props) {
        super(props);
        this.state = {editing: false};
    }

    deletePosting = () => {
        this.props.delete(this.props.id)
    }

    editTitle = () => {
        this.setState({editing: true})
    }


    changeNewTitle = (event) => {
        this.setState({newTitle: event.target.value})
    }

    submit = () =>{
        var newName = {
            title:this.state.newName
        }
        this.props.save(this.props.id, newName);

        this.setState({editing: false})
    }

    render() {
        var editBoxOrEditButton = null;
        if(this.state.editing){
            editBoxOrEditButton = (
                <div>
                    <input value={this.state.newTitle} onChange={this.changeNewTitle}/>
                    <button onClick={this.submit}> submit </button>
                </div>
            )
        }
        else {
            editBoxOrEditButton = <button onClick={this.editTitle}>Edit Title</button>
        }
        return(
            <div>
                <p>{this.props.name}, {this.props.flavor}</p> 
                <img src={ this.props.FruitURL } alt=''/>
                <button onClick={this.deletePosting}>Delete</button>
                {editBoxOrEditButton}
            </div>
        );
   }



}

 





export default FruitPosting;