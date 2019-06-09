import React from 'react';
import Route from './route'

class config extends React.Component {
    routeList = [
      new Route({
          path: 'user/add',
          controller : (path,params) => {
              console.log(path)
          }
        }),new Route({
          path: 'user/update',
          controller : (path,params) => {
            console.log(path)
          }
        })
    ];
}

export default config