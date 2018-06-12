document.getElementById('output').style.visibility="hidden";
document.getElementById('InchInput').addEventListener('input',function(e){

    document.getElementById('output').style.visibility="visible";
    var Inch = e.target.value;
    document.getElementById('cmOutput').innerHTML=Inch*2.54;
    document.getElementById('ftOutput').innerHTML=Inch/0.083;
    document.getElementById('ydOutput').innerHTML=Inch/0.027;
});