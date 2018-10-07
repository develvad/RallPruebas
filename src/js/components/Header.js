import React from 'react';

export default class Header extends React.Component {

    puede = "Podria decirse si."
    head = 22;
    getAll() {
        return "Cabecera general";
    }
    render() {
        return (
            <div>
                <p> { this.getAll() } </p>

            </div>
        )
    }
}