var base64 = require("../util/base64.js"),
      routesUtil = require("../web/urlUtils.js"),
      logger = require('winston');
var statusCode = 403;
var message ="";

var auth = module.exports = {
 
  statusCode:function(){return statusCode;},
  message:function(){return message;},
  basic: function(req){
     var authParts,
              scheme,
              signature,
              credentials,
              username , 
              password;
      logger.info("Retrieving Authorization header");
      var authHeader = req.headers.authorization;
      var requestPath = req.path;
     
      requestPath = routesUtil.removeLastSlash(requestPath);
       //Authorization
      if(typeof authHeader ==='undefined'){
        message = 'You have to provide "Authorization" Header with the following format: Basic base64(user:password) .e.g: Authorization: Basic YWRtaW46YWRtaW4= where "YWRtaW46YWRtaW4" is base64(admin:admin)'
        return false;
      }else{
        authParts = authHeader.split(" "); //Basic asdfASdf
        scheme   = authParts[0];
        signature = base64.decode(authParts[1]);
        credentials = signature.split(":"); //username:password
        username = credentials[0];
        password = credentials[1];

        if (scheme !== "Basic"){
          message = 'Authorization scheme must be "Basic"';
          return false;
        }else if(!username && !password){
           message ='Both username and password are required';
           return false;
        }else if(username !== 'admin' || password !=='admin'){
            message ='Invalid username or password';
            return false;
        }else{
          return true;
        }
      }
  }
}