import React from 'react';

export default class Todo extends React.Component {


    render() {
        const { todo } = this.props;
        return(
            <div>
                <li> {todo.name} - <span  style={{cursor: 'pointer'}} onClick={() => this.props.removeTodo(todo)} > x </span></li> 
     
            </div>

        )
    }
}