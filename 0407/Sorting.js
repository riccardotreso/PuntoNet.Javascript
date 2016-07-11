//contesto variabili
//passaggio variabili (riferimento vs valore)

function sort(aInput){
    var i, j;
    var app;
    for(i= 0; i<aInput.length; i++){
        for(j=0;j<aInput.length; j++){
            if(aInput[i]>aInput[j]){
                app = aInput[i];
                 aInput[i] = aInput[j];
                 aInput[j] = app;
            }
        }
    }

    return aInput;
}

console.log(sort([7,3,5,2]));
