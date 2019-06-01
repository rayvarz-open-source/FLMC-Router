function onRoutChange(hash,path){
    var route = new Route();
    if(hash === undefined) {
      route.__initFromUrl();
    } else {
      route.__setHash(hash)
    }

    if(path != undefined){
        route.path = path;
    }

    routeList.forEach(element => {
      if(element.path == route.path){
        element.controller(element.path,route.params);
      }
    });
}