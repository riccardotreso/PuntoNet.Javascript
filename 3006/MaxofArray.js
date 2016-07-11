function SayHello(miaStringa){
	console.log("Buongiorno " + miaStringa);
}

//....

var stringa = "Riccardo";

SayHello(stringa);
SayHello("Luca");
SayHello("Mario");
SayHello("Francesco");
SayHello("Giovanni");


//Scrivere una function che restituisce 
//il valore massimo di un Array

function maxOfArray(aInput){
	var max = 0;
	var i = 0;
	while(i<aInput.length){
		if(aInput[i]>max){
			max = aInput[i];
		}
		i++;
	}

	return max;
}


var max1 = maxOfArray([2,3,4,5,7,8,9,0,22,56,200]);
var max2 = maxOfArray([2,3,4,5,7,800,9,0,22,56,200]);
var max3 = maxOfArray([2,3,4,5,7,801,9,0,22,56,200]);













