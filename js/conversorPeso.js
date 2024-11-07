function convertirPesoUno(gramo){
    var kilo = gramo / 1000;
    document.getElementById("kilo").value = kilo; 
    return(kilo);

};

function convertirPesoDos(kilo){
    var libra = kilo * 2.20462;
    document.getElementById("libra").value = libra;
    return(libra);
};

function covertirPesoTres(libra){
    var gramo = libra * 453.592;
    document.getElementById("gramo").value = gramo;
    return(gramo);
}