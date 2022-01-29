
var head = document.getElementById("table");
var h1   = document.getElementById("h1");
h1.innerText = " CRYPTO CURRENCY"


var row = document.createElement("tr");
head.appendChild(row);

var th0 = document.createElement("th")
    var th1= document.createElement("th");
    var th2= document.createElement("th");
    var th3= document.createElement("th");
    var th4= document.createElement("th");


    th0.innerText="SYMBOL";
    th1.innerText="PRICE CHANGE";
    th2.innerText="PRICE CHANGE%";
    th3.innerText="ASK PRICE";
    th4.innerText="ASK QUANTITY"

    row.appendChild(th0);
    row.appendChild(th1);
    row.appendChild(th2);
    row.appendChild(th3);
    row.appendChild(th4);

var url = "https://api2.binance.com/api/v3/ticker/24hr";

fetch(url)
.then((accept)=> {
     return accept.json()})
.then((final) => {
    // console.log(final);
// for( var i = 0 ; i < final.length; i++)
for( i in final)
{
    var row = document.createElement("tr");


    var td0 = document.createElement("td")
    var td1= document.createElement("td");
    var td2= document.createElement("td");
    var td3= document.createElement("td");
    var td4= document.createElement("td");

    td0.innerText= final[i]["symbol"];
    td1.innerText=final[i]["priceChange"];
    td2.innerText=final[i]["priceChangePercent"];
    td3.innerText=final[i]["askPrice"];
    td4.innerText=final[i]["askQty"];

    head.appendChild(row);

    row.appendChild(td0);
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    // row.appendChild("td5")
    


}
})









