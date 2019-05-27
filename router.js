import React from 'react';

//models
import {Route} from 'Route';

//data controller
import Home from 'controller/Home';
import Document from 'controller/Document';
import Gallery from 'controller/Gallery';

//context is a global module 

const router = {
    home: new Route({
        path: '/',
        controller: Home
      }),
      document: new Route({
        path: '/document/:id',
        controller: Document,
        beforeEnter: (route, params, context) => {
          const userIsLoggedIn = context.app.user;
          if (!userIsLoggedIn) {
            alert('Only logged in users can enter this route!');
            return false;
          }
        },
        onEnter: (route, params) => {
          console.log(`entering document with params`, params);
        }
      }),
}