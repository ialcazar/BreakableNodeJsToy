var express = require('express'),
      logger = require('winston');
      pub = __dirname + '/public',
      app = exports = express(),
      Negotiate = require("express-negotiate");

      /**
* Retrieve Command Line Arguments
* [0] process : String 'node'
* [1] app : void
* [2] port : Number 8010
*/
var args = process.argv;
var port = args[2] || 3000;

//Some const
app.RESTBASE = "/rest/v1";
var routes = require('./web/routes.js')(app,logger);

//Configure logs
logger.add(logger.transports.File, { filename: 'logs/main.log',level:'info',json:false,maxsize:'1024',handleExceptions: true });
logger.info("Url base REST:  "+app.RESTBASE);

app.configure(function(){ 
  app.use(app.router);
  app.use(express.static(pub));
  
  app.set('view engine', 'jade');
});

app.configure('development',function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production',function(){
  app.use(express.errorHandler());
});

if (!module.parent) {
  app.listen(port);
  logger.info("Express server listening on port "+ port);
}
