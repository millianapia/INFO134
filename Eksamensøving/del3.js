// EKSAMEN 1
// oppgave 1
function fetch(URL, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.status == 200 && this.readyState ==4){
            callback(JSON.parse(this.responseText));
        }
    }
    xhr.open("GET", URL);
    xhr.send();
}

// oppgave 2
function CurrencyConv(data, from, to){
    this.dataurl; // 5
    this.data = data; // 4
    this.from = from;
    this.to = to;
    this.rate = data[from][to];

}

// oppgave 3
fetch("http//example.com/currencies", function(responseData){
    // oppgave 5: (responseData, "http://example.com/currencies, "NOK", "SEK")
    var converter = new CurrencyConv(responseData, "NOK", "SEK");
});


// oppgave 4 
CurrencyConv.prototype = {
    changeTargetConv: function(to){
        this.to = to;
        this.rate = this.data[this.from][to];
    },
    // Oppgave 5 
    changeTargetOnline: function(to){
        let proto = this;
        this.to = to;
        fetch(this.dataurl, function(responseData){
            proto.data = responseData;
            proto.rate = proto.data[proto.from][to];
        });
    }
}

// EKSAMEN 2


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(this.status == 200 && this.readyState == 4){

    }
}

xhr.open("GET", url);
xhr.send();