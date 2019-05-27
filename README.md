# FLMC-Router
javascript router (Client-side) [powered by director]


Example Router :

```javascript
import React from 'react';

//models
import {Route} from 'Route';

//data controller
import Home from 'controller/Home';
import Document from 'controller/Document';
import Gallery from 'controller/Gallery';
import Other from 'controller/Other';
//context is a global module 

const router = {
    home: new Route({
        path: '/',
        controller: Home
      }),
    document: new Route({
        path: '/document/:id',
        controller: Document,
        beforeEnter: (router, params, context) => {
          const userIsLoggedIn = context.app.user;
          if (!userIsLoggedIn) {
            alert('Only logged in users can enter this route!');
            return false;
          }
        },
        onEnter: (router, params) => {
          console.log(`entering document with params`, params);
        }
      }),
    gallery: new Route({
        path: '/gallery/:id/page/:page', // path: '/gallery?id=:id&page=:page'
        controller: Gallery,
        onEnter: (route, params, context) => {
          console.log(`entering book with params`, params);
          store.app.setTitle(route.title);
        }
      }),
    withPar : new Route({
        path:'/withPar',
        controller : Other,
        params : {id : 1 , title : 'test' , subTitle : context.stm.current.subTitle}, // params : context.stm.current
        onEnter: (route,params,context) => {
            context.stm.withPar = params;
        }
    })
};
```
