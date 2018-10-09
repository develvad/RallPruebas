import React, {Component} from 'react';
import Todo from './Todo'

export default class TodoList extends Component {
    render(){
        const { todoList } = this.props;

        return(
            <div>
                <h1> Lista de tareas </h1>
                <ul>
                    { 
                        todoList.map((todo) => 
                            <Todo key={ todo.id } todo={ todo } removeTodo={this.props.removeTodo} /> 
                        )
                    }
                </ul>
            </div>
        );   
    }
}