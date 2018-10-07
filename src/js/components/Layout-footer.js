import React from 'react';

export default class LayoutHeader extends React.Component {
    render(){
        this.props.quees();
        return(
            <h1> { this.props.tituloF }</h1>
        );
    }
}