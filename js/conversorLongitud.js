

function convertirLongitudUno(metro){
    var kilometro = metro / 1000;
    document.getElementById("kilometro").value = kilometro;
    return(kilometro);
    
}
function convertirLongitudDos(kilometro){
    var milla = kilometro * 0.621371;
    document.getElementById("milla").value = milla;
    return(milla);
}
function convertirLongitudTres(milla){
    var metro = milla / 1609.34;
    document.getElementById("metro").value = metro;
    return(metro);
}
