
var rubrica = require("./Rubrica");
var readline = require('readline');
var _welcomeMessage = "Buongiorno, digita 1 per inserire, 2 per modificare, 3 per cancellare, 4 per ricercare, 9 per uscire >>> ";


function doInsert(rl){
	var _nome, _cognome, _numeroTelefono;
	_doQuestion(rl, "Inserire il nome: ", function(nome){
		_nome = nome;
		_doQuestion(rl, "Inserire il cognome: ", function(cognome){
			_cognome = cognome;
			_doQuestion(rl, "Inserire il numero di telefono: ", function(telefono){
				_numeroTelefono = telefono;
				//console.log(_nome +" "+_cognome+" "+ _numeroTelefono);

				//Insert then 
				rubrica.insert(_nome,_cognome,_numeroTelefono);

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
	var _text;
	_doQuestion(rl, "Inserire testo da cercare: ", function(text){
		_text = text;
		

		//Search then 
		var searchResult = rubrica.search(_text);
		for(var i= 0; i<searchResult.length; i++){
			console.log("Nome: " + searchResult[i].nome + " Cognome: "+searchResult[i].cognome);			
		}
		_doQuestionMenu(rl, _welcomeMessage);
	});
	
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
				doInsert(rl);
				break;
			case "2":
				doUpdate(rl);
				break;
			case "3":
				doDelete(rl);
				break;
			case "4":
				doSearch(rl);
				break;
			case "9":
				exit = true;
				break;
			default:
				console.log("Nessuna scelta valida");
				_doQuestionMenu(rl, _welcomeMessage);
				break;
		}

		if(exit)
		{
			rubrica.dispose();
			rl.close();
		}
	});
}


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rubrica.init();


_doQuestionMenu(rl, _welcomeMessage)





