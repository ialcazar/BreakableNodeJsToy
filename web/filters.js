var auth = require("../security/auth.js");



var filters = module.exports = function(app, logger){

  var RESTBASE = app.RESTBASE;
  //CORS
  app.all(RESTBASE+'/*', function(req, res, next){
    logger.info("Enabling CORS");
    res.removeHeader("X-Powered-By");
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-Requested-With, Content-Type');
    next();
  });


   //Autentication & Authorization support
    //see http://blog.nodejitsu.com/a-simple-webservice-in-nodejs
    app.all(RESTBASE+'/*', function(req, res, next){
      logger.info("Autenticating URI "+ req.path);
      if(!auth.basic(req)){
          logger.info("Autentication failure with [code="+auth.statusCode()+" ,msg="+auth.message()+"]");
          res.json(auth.statusCode(),
            {
              'error':auth.message()
            });
      }else{
        next();
      }
      
    });
};