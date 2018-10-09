import React, { Component } from 'react';
import LayoutHeader from './Layout-header'; 
import LayoutFooter from './Layout-footer'; 
import TextBox from './TextBox';
import TodoList from './TodoList'

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }
    addTodo(todo) {
        console.log(this.state);
        this.state.todos.push(todo);
        this.setState({todos: this.state.todos});
    }

    render(){

        return (
            <div>
                <LayoutHeader />
                <TextBox addTodo={this.addTodo.bind(this)} />
                <TodoList todoList={this.state.todos} />
                <LayoutFooter tituloF={ "Este es el footer" } />
            </div>
        );
    }
}
