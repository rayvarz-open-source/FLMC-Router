//import module base64

class Route {
    //props
    path;
    params;
    hash;
    //lifecycle methods
    controller;

    constructor(props) {
        if (props != undefined){
            this.path= props.path;
            this.params= props.params;
            this.hash= props.hash;
            this.controller = props.controller;
        }
    }

    async go(){
        console.log('go: ' + JSON.stringify(this))
    }

    changeLocation(prop){
        console.log(prop)
    }


    __initFromUrl(){
        try{

            this.hash = Base64.decode(window.location.hash.substring(1));
            var routeObject = JSON.parse(this.hash);
            
            this.path= routeObject.path;
            this.params= routeObject.params;


        }catch(err){
            this.changeLocation('404')
        }
    }

    __setHash(hash){
        this.hash = hash;
        var routeObject = JSON.parse(Base64.decode(this.hash));
        this.path= routeObject.path;
        this.params= routeObject.params;
    }

    encode(){
        return Base64.encode(JSON.stringify(this));
    }

    test(){

    }
}