import React from 'react';

export default class LayoutHeader extends React.Component {
    render(){
        return(
            <h1> { this.props.tituloF }</h1>
        );
    }
}