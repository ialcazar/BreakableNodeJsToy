//Module constructor

var model = module.exports ={
  menu:function(id){
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

  },
  userBy:function(name,surname,workArea,workCenter){
    var users = [];
    var user = {
    "href":"/directorioEmpleados/2065",
    "apellido2":"Rodriguez",
    "nif":"1234",
    "apellido1":surname,
    "idCliente":"2065",
    "telfCorto":"2071",
    "nombreCompleto":"Israel Alcazar Rodriguez",
    "email1":"ialcazar@atsistemas.com",
    "nombre":name,
    "centroTrabajo":{
        "href":"/areasTrabajo/1/centrosTrabajo/1",
        "tieneDescripcion":false,
        "direccion":"Calle Valle de Alcudia, 3. Edificio 2. Planta 1",
        "visible":false,
        "poblacion":"Las Rozas",
        "idCliente":"1",
        "descripcion":null,
        "gmapLng":-3.88365000,
        "provincia":{
          "href":"/provincias/29"
          },
        "url":null,
        "codPostal":"28230",
        "nombre":"Las Rozas",
        "orden":null,
        "usuarioCambio":"jmrufino@atsistemas.com",
        "gmapLat":40.51750000,
        "areaTrabajo":{
          "href":"/areasTrabajo/1"
        },
        "padreId":null
      },
    "telfTrabajo":"677499589",
    "usuarioCambio":null,
    "areaTrabajo":{
        "href":"/areasTrabajo/1",
        "tieneDescripcion":false,
        "orden":1,
        "nombre":workArea,
        "visible":true,
        "idCliente":"1",
        "descripcion":null,
        "usuarioCambio":"jmrufino@atsistemas.com",
        "url":null,
        "padreId":null
      }
    }
    users.push(user);
    return users;
  }
}