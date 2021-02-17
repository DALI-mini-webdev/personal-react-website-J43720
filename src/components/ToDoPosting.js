import React, {Component} from 'react';
import firebase from '../firebase/index';

class ToDoPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    deletePosting = () => {
        console.log('deleted!');
        this.props.delete(this.props.id);
    }

    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <p>{this.props.task}</p>
                <button onClick={this.deletePosting} >Delete!</button>
            </div>
        )
    
    }
}

export default ToDoPost;