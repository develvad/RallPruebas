import React, { Component } from 'react';
import LayoutHeader from './Layout-header'; 
import LayoutFooter from './Layout-footer'; 

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.nombre = "Vladi"
        this.edad = 25
    }
    getNombre() {
        return 'Paco';
    }
    getEdad() {
        return this.edad;
    }
    render(){
        const nombre = this.getNombre();
        return (
            <div>
                <LayoutHeader />
                <h1>Hola { nombre }</h1>
                <p>{ this.getEdad() + ' Años' }</p>
                <LayoutFooter />
            </div>

        );
    }
}

