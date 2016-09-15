


function doInsert(rl){
	var _nome, _cognome, _numeroTelefono;
	_doQuestion(rl, "Inserire il nome", function(nome){
		_nome = nome;
		_doQuestion(rl, "Inserire il cognome", function(cognome){
			_cognome = cognome;
			_doQuestion(rl, "Inserire il numero di telefono", function(telefono){
				_numeroTelefono = telefono;
				console.log(_nome +" "+cognome+" "+ _numeroTelefono);

				//Insert then 
				_doQuestionMenu(rl, _welcomeMessage);
			});
		});
	});
}

function doUpdate(rl){
	_doQuestionMenu(rl, _welcomeMessage);
}
function doDelete(rl){
	_doQuestionMenu(rl, _welcomeMessage);
}
function doSearch(rl){
	_doQuestionMenu(rl, _welcomeMessage);
}



function _doQuestion(rl, message, callback){
	rl.question(message, function(answer){
		if(callback){
			callback(answer);
		}
	});
}



function _doQuestionMenu(rl, message){
	var exit = false;
	rl.question(message, function(opt){
		switch(opt){
			case "1":
				console.log("Inserimento");
				doInsert(rl);
				break;
			case "2":
				console.log("Modifica");
				doUpdate(rl);
				break;
			case "3":
				console.log("Cancellazione");
				doDelete(rl);
				break;
			case "4":
				console.log("Ricerca");
				doSearch(rl);
				break;
			case "9":
				console.log("Exit");
				exit = true;
				break;
			default:
				console.log("Nessuna scelta valida");
				_doQuestionMenu(rl, _welcomeMessage);
				break;
		}

		if(exit)
		{
			rl.close();
		}
	});
}


var readline = require('readline');
var _welcomeMessage = "Buongiorno, digita 1 per inserire, 2 per modificare, 3 per cancellare, 4 per ricercare, 9 per uscire >>> ";

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


_doQuestionMenu(rl, _welcomeMessage)





