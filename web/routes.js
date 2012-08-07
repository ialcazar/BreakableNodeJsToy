var routers = module.exports = function(app,logger){
    var RESTBASE = app.RESTBASE;
    var logger = logger || require('winston');
    var model = require("../model/model.js");
    var filters = require("./filters.js")(app,logger);


    /*** FILTERS ******/
   

    /*** END FILTERS ******/

    app.get('/hey', function(req, res){
      logger.info("Saying hello world")
      res.send('I\'m awake man');
    });
    app.get("/", function(req, res){
       logger.info("Request to '/' [Accept:"+req.headers.accept+"]");
       res.format({
          html: function(){
            res.render('index');
          },

          text: function(){
             res.render('index');
          },

           json: function(){
              res.json(404,
                {
                   'links':[
                  {
                    'type':'application/json',
                    'rel':'Root API',
                    'uri':'http://localhost:4000/rest/v1/'
                  }
                ]
                });
           }
        });
     });

    app.get(RESTBASE, function(req, res,next){
      logger.info("Request to " +RESTBASE+ " [Accept:"+req.headers.accept+"]");
      res.format({  
        json: function(){
          res.json(404,
              {
              'links':[
                  {
                    'type':'application/json',
                    'rel':'User Details',
                    'uri':'http://localhost:4000/rest/v1/users/{username}'
                  }
                ]
              }
          );
        }
      });
     
    });

    app.get(RESTBASE+"/users/:id", function(req, res,next){
      var id = req.params.id;
      logger.info("User id: "+id);
      res.format({
        json: function(){
          var menu = model.menu(id);
          res.json(menu);
        }
      });
     
    });
}
