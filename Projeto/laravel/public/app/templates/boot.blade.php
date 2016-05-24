<!DOCTYPE html>
<html>
    <head>
        <title>Drive Thru Supermarket</title>
          <base href="/"/>

          <script src="js/jquery-1.12.3.js"></script>
         
            <script src="app/node_modules/es6-shim/es6-shim.min.js"></script>
    <script src="app/node_modules/systemjs/dist/system-polyfills.js"></script>
    <script src="app/node_modules/angular2/es6/dev/src/testing/shims_for_IE.js"></script>   
    <script src="app/node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="app/node_modules/systemjs/dist/system.src.js"></script>
    <script src="app/node_modules/rxjs/bundles/Rx.js"></script>
     <script src="app/node_modules/angular2/bundles/router.dev.js"></script>
      <script src="app/node_modules/angular2/bundles/http.dev.js"></script>
    <script src="app/node_modules/angular2/bundles/angular2.dev.js"></script>
         <script src="app/node_modules/jquerymask/dist/jquery.mask.min.js"></script>
          <script src="app/node_modules/bootstrap/dist/js/bootstrap.js"></script>

      

     <link href="app/node_modules/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
     <link href="css/app.css" rel="stylesheet">

    
   

<!-- (Optional) Latest compiled and minified JavaScript translation files -->


      



    <script>
      System.config({
        packages: {        
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
      });
      System.import('app/ts/main')
            .then(null, console.error.bind(console));

            $(function() {
  
    $('.money').mask('#.##0,00', {reverse: true});

  });
    </script>

    </head>
    <body>
      
                <my-app>Loading</my-app>
    </body>
</html>
