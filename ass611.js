
var head = document.getElementById("table");
var h1   = document.getElementById("h1");
h1.innerText = " UNIVERSITIES IN INDIA"


var th0 = document.createElement("th")
    var th1= document.createElement("th");
    var th2= document.createElement("th");
    var th3= document.createElement("th");
    var th4= document.createElement("th");


    th0.innerText=" Country Code";
    th1.innerText=" Name";
    th2.innerText="State";
    th3.innerText="Domains";
    th4.innerText="Web Pages"

    row.appendChild(th0);
    row.appendChild(th1);
    row.appendChild(th2);
    row.appendChild(th3);
    row.appendChild(th4);

var url = "http://universities.hipolabs.com/search?country=india";

fetch(url)
.then((accept)=> {
     return accept.json()})
.then((final) => {
    
// for( var i = 0 ; i <final.length; i++)
for( i in final)
{
    var row = document.createElement("tr");


    var td0 = document.createElement("td")
    var td1= document.createElement("td");
    var td2= document.createElement("td");
    var td3= document.createElement("td");
    var td4= document.createElement("td");

    td0.innerText= final[i]["alpha_two_code"];
    td1.innerText=final[i].name;
    td2.innerText=final[i]["state-province"];
    td3.innerText=final[i]["domains"];
    td4.innerText=final[i]["web_pages"];

    head.appendChild(row);

    row.appendChild(td0);
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    // row.appendChild("td5")
    


}
})









