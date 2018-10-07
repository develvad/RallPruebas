import React, { Component } from 'react';
import LayoutHeader from './Layout-header'; 
import LayoutFooter from './Layout-footer'; 
import TextBox from './TextBox';
import TodoList from './TodoList'

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {nombre: 'Vladi', edad: 36, cabecera: 'Esta es la cabecera 1'}
        setTimeout(() => {
            this.setState({nombre: 'Ñoooo', edad: 199, cabecera: 'Segunda cabecera'})
        }, 2000)
    }   
    printMorl() {
        console.log("Soy un Footer !!");
    }

    getNombre() {
        return this.state.nombre;
    }
    getEdad() {
        return this.state.edad;
    }
    render(){
        const nombre = this.getNombre();
        return (
            <div>
                <LayoutHeader nombre={this.state.cabecera} />
                <TextBox />
                <TodoList />
                <LayoutFooter tituloF={ "Este es el footer" } quees={this.printMorl} />
            </div>
        );
    }
}
