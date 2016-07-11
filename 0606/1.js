var sNome = "Corrado";
undefined
s
sNome
"Corrado"
s
sNome = sNome + " Giordano";
"Corrado Giordano"
sNome = sNome + " Giordano";
"Corrado Giordano Giordano"
var sCognome = "Giordano";
undefined
sNome = "Corrado";
"Corrado"
console.log(sNome + sCognome)
VM1240:1 CorradoGiordano
undefined
console.log(sNome + " " +sCognome);
VM1241:1 Corrado Giordano
undefined
console.log("Nome: "+sNome + " Congome: " +sCognome);
VM1242:1 Nome: Corrado Congome: Giordano
undefined
console
Console {memory: MemoryInfo}
sNome.length
7
sNome.length
7
sNome[0]
"C"
sNome.push('s')
VM1355:1 Uncaught TypeError: sNome.push is not a function(…)(anonymous function) @ VM1355:1InjectedScript._evaluateOn @ VM51:145InjectedScript._evaluateAndWrap @ VM51:137InjectedScript.evaluate @ VM51:118
sNome
"Corrado"
