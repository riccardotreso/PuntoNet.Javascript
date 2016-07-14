var ARRAY_DATA = [];

function populate(){
	for(var i = 0; i < 1000; i++){
		var obj = {
			number: parseInt((Math.random() * 100)), 
			changed: false,
			changedAt: null
		}
		ARRAY_DATA.push(obj);
	}
}


//Scrivere la procedura per aggiungere 10 ad ogni numero divisibile per 5
//togliere 4 ad ogni numero divisibile per 2
//non deve andare sotto lo 0 o sopra il 100 (il minimo deve essere 0, il massimo 100)

//per ogni oggetto aggiornato, registrare la variazione impostando changed = true, 
//e la data odierna nella property changedAt

//Infine, stampare a video tutti i numeri modificati


function modifyArray(){
	for(var i = 0; i < ARRAY_DATA.length; i++){
		//se la property dell'oggetto contenuto nella posizione i di Array_Data è divisibile per 5
		//aggiungo 10 alla property di array_data in posizione i
		if(ARRAY_DATA[i].number % 5 == 0){
			ARRAY_DATA[i].number = ARRAY_DATA[i].number + 10;
			ARRAY_DATA[i].changed = true;
			var date = new Date();
			ARRAY_DATA[i].changedAt = date;
			if(ARRAY_DATA[i].number > 100){
				ARRAY_DATA[i].number = 100;
			}

			//ARRAY_DATA[i].number += 10;
		}

		if(ARRAY_DATA[i].number % 2 == 0){
			ARRAY_DATA[i].number -= 4;
			ARRAY_DATA[i].changed = true;
			var date = new Date();
			ARRAY_DATA[i].changedAt = date;
			if(ARRAY_DATA[i].number < 0){
				ARRAY_DATA[i].number = 0;
			}
		}
	}
}

..
...
...
...
.
...
.



//[tresor] 20160714 popolo il mio array
populate();





