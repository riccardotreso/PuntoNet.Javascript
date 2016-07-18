function Impiegato(){
    var self = this;
    
    //Propeties
    self.nome = "";
    self.cognome = "";
    self.id = 0;
    self.dataDiNascita = null;

    //Methods
    self.GetFullName = function () {
        return self.nome + " " + self.cognome;
    };  

    self.SetId = function (value) {
        self.id = value;
    };

    self.GetId = function () {
        return self.id;
    };    

}


var i = new Impiegato();
i.nome = "Luca";
i.cognome = "Passerini"

console.log(i.GetFullName());
