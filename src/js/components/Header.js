import React from 'react';

export default class Header extends React.Component {

    puede = "Podria decirse si."
    head = 22;
    getAll() {
        return "Te colonizoooo";
    }
    render() {
        return (
            <div>
                <p> { this.getAll() } </p>
                
                <p> 'No eres cristiano {this.puede} Que dices panoli {this.head}' </p>
            </div>
        )
    }
}