
/* Include */
var fs = require('fs');

var Rubrica = {};

//Private properties
var aNominativi = [];
var timer;
var nomeFileData = "DB.txt";

//public methods
Rubrica.init = function(){
	_getData();

	timer = setInterval(function (){
		_saveData();
	}, 3000);

};

Rubrica.dispose = function (){
	clearInterval(timer);
};


Rubrica.insert = function(pNome, pCognome, pTelefono){
	//implementation
	var nominativo = {
		nome: pNome, 
		cognome: pCognome,
		telefono: pTelefono

	};

	aNominativi.push(nominativo);
	
	return nominativo;

};


Rubrica.search = function(pText){
	//implementation
	pText = pText.toLowerCase();
	var result = [];
	for(var i=0; i< aNominativi.length; i++){
		var doc = aNominativi[i];
		if(doc.nome.toLowerCase().indexOf(pText) > -1 ||
			doc.cognome.toLowerCase().indexOf(pText) > -1 ||
			doc.telefono.toLowerCase().indexOf(pText) > -1){
			result.push(doc);
		}
	}

	return result;

};


//private methods
//Save Data
function _saveData(callback){
	//ogni tot millisecondi salva il dato di aNominativi -> su file
	var serArray = JSON.stringify(aNominativi);
	fs.writeFile(nomeFileData, serArray, function (err){
		if(callback){
			callback(err);
		}
	});

}

//get data
function _getData(){
	//all'inizio, carica i dati
	fs.readFile(nomeFileData, function (err, data){
		if(!err){
			aNominativi = JSON.parse(data);
		}
		//else controlliamo l'errore
	});
}




module.exports = Rubrica;