import React from 'react';

export default class LayoutHeader extends React.Component {

    render(){
        return (
            <span>
                <h1> {this.props.nombre}</h1>
            </span>
        );
    }
}