const routeList = [
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