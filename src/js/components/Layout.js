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
    removeTodo(todo) {
        // Aquí lógica
        console.log('jajaj');
        this.state.todos = this.state.todos.filter((todoList) => todoList.id != todo.id);
        this.setState({todos: this.state.todos});
    }

    render(){

        return (
            <div>
                <LayoutHeader />
                <TextBox addTodo={this.addTodo.bind(this)} />
                <TodoList removeTodo={this.removeTodo.bind(this)} todoList={this.state.todos} />
                <LayoutFooter tituloF={ "Este es el footer" } />
            </div>
        );
    }
}
