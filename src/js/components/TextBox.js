import React from 'react';

const ENTER_KEY_CODE = 13;
let ID = 1;
export default class TextBox extends React.Component {


    daleKD(e) {
        
  
        if (e.keyCode === ENTER_KEY_CODE){
            // console.log(this.refs.otraaa.value);
            this.props.addTodo({name: this.refs.texto.value, id: ID});
            ID++;
        }
    }

    render(){
        // console.log(this.props); 
        return(
            <input  ref="texto"
                    type="text"
                    placeholder="ingresa tu nombre" 
                    onKeyDown={ this.daleKD.bind(this) }/>
        );
    }
}