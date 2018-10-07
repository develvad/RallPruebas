import React from 'react';

const ENTER_KEY_CODE = 13;
export default class TextBox extends React.Component {


    daleKD(e) {
        if (e.keyCode === ENTER_KEY_CODE){
            console.log(this.refs.otraaa.value);

        }
    }
    render(){

        return(
            <input  ref="otraaa"
                    type="text"
                    placeholder="ingresa tu nombre" 
                    onKeyDown={ this.daleKD.bind(this) }/>
        );
    }
}