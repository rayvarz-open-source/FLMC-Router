# FLMC-Router
simple javascript router (Client-side)



```html
<html>
    <header>
        <script src="../src/base64.js"></script>
        <script src="../src/route.js"></script>
        <script src="route.config.js"></script>
        <script src="../src/router.js"></script>
        <script>
        window.onload = function(){
            //onRoutChange called directly - ignore init by url
            onRoutChange('eyJwYXRoIjoidXNlci9hZGQiLCJwYXJhbXMiOlt7ImlkIjoxMCwidGl0bGUiOiJ0ZXN0In0seyJpZCI6MTEsInRpdGxlIjoidGVzdCJ9XX0=');
        }

        </script>
        <style>
        a {
            display: block;
            padding: 10px;
        }
        </style>
    </header>
    <!-- onRoutChange without parameter - init by url hash -->
    <body onhashchange="onRoutChange()">
        <a href="#eyJwYXRoIjoidXNlci9hZGQiLCJwYXJhbXMiOlt7ImlkIjoxMCwidGl0bGUiOiJ0ZXN0In0seyJpZCI6MTEsInRpdGxlIjoidGVzdCJ9XX0=">user/add</a>
        <a href="#eyJwYXRoIjoidXNlci91cGRhdGUiLCJwYXJhbXMiOlt7ImlkIjoxMCwidGl0bGUiOiJ0ZXN0In0seyJpZCI6MTEsInRpdGxlIjoidGVzdCJ9XX0=">user/update</a>
        <a href="#agasdfasdfasdf">404</a>
    </body>
</html>
```
route.config
```javascript
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
```
