//istanziato la variabile globale
var ARRAY_LOG = [];

function insData(pInput){
	//body 
	//return true o false in base all'esito dell'inserimento
	var result = false;

	//TODO: Controllo che pInput non ci sia già nell'array
	//...

	//Inserito l'informazione nell'array
	ARRAY_LOG.push(pInput);

	//resettato la variabile result
	result = true;

	//restituito il risultato
	return result;
}


function getData() {

	//testo:......
	//index:......
	
	//Dichiaro una stringa vuota
	var result = "";

	for(var i = 0; i<ARRAY_LOG.length; i++){
		var sTesto = ARRAY_LOG[i];
		var sIndex = i;

		result += "testo:"+sTesto+", index:"+sIndex+". ";
	}

	return result;
}



insData("mario");
insData("Luca");
insData("Giovanni");
insData("Riccardo");
insData("Marco");
insData("Maria");
insData("Giuseppe");

var strData = getData();
console.log(strData);
