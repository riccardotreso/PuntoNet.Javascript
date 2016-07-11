function sort(aInput, t){
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

    t += 10;
    return aInput;
}

var array = [10,3,7,2,9,4,8];
var t= 2;
console.log(sort(array, t));
console.log(t);
console.log(array);


