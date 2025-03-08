var h_csales = document.getElementById("csales");
var h_bsales = document.getElementById("bsales");
var h_msales = document.getElementById("msales");

var h_ssales = document.getElementById("sres");
var h_nsales = document.getElementById("nres");
var h_tsales = document.getElementById("tres");

var csales, bsales, msales;



function generateValues(){
    csales = Math.ceil(Math.random()*20);
    bsales = Math.ceil(Math.random()*20);
    msales = Math.ceil(Math.random()*20);
}

function findMostSales(){
    var strng = "";
    var max = Math.max(csales,bsales,msales);
    if (csales == max) {
        strng = strng + "Chocolate, ";
    }
    if (bsales == max) {
        strng = strng + "Buttermilk, ";
    }
    if (msales == max) {
        strng = strng + "Matcha, ";
    }
    strng = strng.slice(0, strng.length-2) + " (" + max + ")";
    return strng;
}

function generateLetter(){
    var alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    if (csales > 0) {
        return alph.charAt(csales-1);
    } else {
        return "A";
    }
}

function findTime(){
    var tmin = bsales * msales;
    var hrs = Math.trunc(tmin / 60);
    var nmin = tmin - hrs * 60;
    
    return [tmin, hrs, nmin];
}


function displayValues(){
    h_csales.innerHTML = csales;
    h_bsales.innerHTML = bsales;
    h_msales.innerHTML = msales;
    
    var [tmin, hrs, nmin] = findTime();
    
    h_ssales.innerHTML = 
        "The cookie flavor with most sales was: " + 
        findMostSales();
    h_nsales.innerHTML = 
        "The favorite letter of the person who bought the most cookies: " +
        generateLetter();
    
    h_tsales.innerHTML = 
        "The amount of time before the store closed: (" +
        tmin + " mins) or " + hrs + " hr(s) " + nmin + " min(s)";
    }

generateValues();
displayValues();
