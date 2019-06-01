function onRoutChange(props){
  var route = new Route();
  if(props === undefined){
    route.__initFromUrl();
  } else {
    if(props.hash != undefined) {
      route.__setHash(props.hash);
    }
    if(props.path != undefined) {
      route.path = props.path;
    }
    if(props.params != undefined) {
      route.params = props.params;
    }
  }
    routeList.forEach(element => {
      if(element.path == route.path){
        element.controller(element.path,route.params);
      }
    });
}