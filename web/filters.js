var routesUtil = require("./routesUtil.js");
//var auth = require("security/auth.js");
var base64 = require("../util/base64.js");
module.exports = function(app, logger){
  
  //CORS
  app.all('*', function(req, res, next){
    logger.info("Enabling CORS");
    res.removeHeader("X-Powered-By");
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    next();
  });


   //Autentication & Authorization support
    //see http://blog.nodejitsu.com/a-simple-webservice-in-nodejs
    app.all('*', function(req, res, next){
      logger.info("Retrieving Authorization header");
      var authHeader = req.headers.authorization;
      var requestPath = req.path;
     
      requestPath = routesUtil.removeLastSlash(requestPath);

      //TODO: Authenticate /rest/v1/users/{username}
      if(typeof authHeader ==='undefined'){
        res.json(403,
          {
            'error':'You have to provide Authorization Header with the following format: Basic base64(user:password)',
          });
      }else{
        //Authorization
        var authParts = authHeader.split(" "), //Basic asdfASdf
              scheme   = authParts[0],
              signature = base64.decode(authParts[1]);
              credentials = signature.split(":"), //username:password
              username = credentials[0],
              password = credentials[1];

        if (scheme !== "Basic"){
          res.json(403,
            {
              'error':'Authorization scheme must be "Basic" '
            });
        }else if(!username && !password){
            res.json(403,
            {
              'error':'Both username and password are required'
            });
        }else if(username !== 'admin' || password !=='admin'){
            res.json(403,
            {
              'error':'Invalid username or password'
            });
        }else{
          next();
        }
      }
      
    });
};