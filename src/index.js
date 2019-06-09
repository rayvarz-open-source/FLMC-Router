import React from 'react';
import ReactDOM from 'react-dom';

import _router from './router'

const routing = (
<div>
    <a href="#eyJwYXRoIjoidXNlci9hZGQiLCJwYXJhbXMiOlt7ImlkIjoxMCwidGl0bGUiOiJ0ZXN0In0seyJpZCI6MTEsInRpdGxlIjoidGVzdCJ9XX0=">user/add</a>
    <br/>
    <a href="#eyJwYXRoIjoidXNlci91cGRhdGUiLCJwYXJhbXMiOlt7ImlkIjoxMCwidGl0bGUiOiJ0ZXN0In0seyJpZCI6MTEsInRpdGxlIjoidGVzdCJ9XX0=">user/update</a>
    <br/>
    <a href="#agasdfasdfasdf">404</a>
</div>)

document.body.onhashchange = function(){
    _router()
};




ReactDOM.render(routing, document.getElementById('root'));
