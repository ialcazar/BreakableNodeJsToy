//Module constructor
exports.menu = function(id){
  var mymenu = {
        "userPrivateID":id,
        "token":"generatedTokenToAccessNextRequests",
        "menu":{
                "icon":"img/icoSubmenu.gif",
                "title":"Menu básico",
                "items":[
                          {
                          "icon":"img/menu/icoConsultaEmpleados.gif",
                          "title":"Directorio de Empleados",
                          "subordinated":0,
                          "applicationId":"sistemaGestion.directorioEmpleadosController",
                          "personalizacionId":87,
                          "type":"simple",
                          "shortName":"directorio",
                          "tooltip":"Directorio de Empleados",
                          "personalizacion":"INTERNOS"
                          }
                ],
                "fullName":"Israel Alcazar Rodriguez"
         }
   };

  return mymenu;

};