import ReactDOM from 'react-dom';
import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';

let app = document.getElementById('app');
let header = document.getElementById('headerComponent');

ReactDOM.render(<Layout />, app);
ReactDOM.render(<Header />, header);