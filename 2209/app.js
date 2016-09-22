
var fs = require('fs');
var ev = process.env.ENV_MODE;




//Leggo il config ciclando sull'array
fs.readFile("config.json", function(error, data){
	
	var arrData = JSON.parse(data);
	for(var i = 0; i< arrData.length; i++){
		if(arrData[i].enviroment == ev){
			console.log(arrData[i].DBPath);

			//Creare il modulo rubrica
			//rubrica.init(arrData[i].DBPath);
			break;
		}
	}



});


//Leggo il config accedendo direttamente alla sua propeties
fs.readFile("config2.json", function(error, data){
	
	var objData = JSON.parse(data);

	console.log(objData[ev].DBPath);

});
