//istanziato la variabile globale
var ARRAY_LOG = [];

function exists(array, value){
	//body
	var i = 0;
	var result = false;
	while(i< array.length){
		if(array[i] == value){
			result = true;
		}
		i++;
	}

	return result;

}

function insData(pInput){
	//body 
	//return true o false in base all'esito dell'inserimento
	var result = false;

	if(!exists(ARRAY_LOG, pInput)){
		//Inserisco l'informazione nell'array
		ARRAY_LOG.push(pInput);

		//resettato la variabile result
		result = true;
	}


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
