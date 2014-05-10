function f2nremoveDisable() {
    document.getElementById("f2fn").disabled = false;
    document.getElementById("f2ln").disabled = false;
    document.getElementById("f2ma").disabled = false;
    document.getElementById("f2fe").disabled = false;
    document.getElementById("f2namesave").style.display = "";
    document.getElementById("f2penn").style.display = "none";
    
}
function f2naddDisable() {
    document.getElementById("f2fn").disabled = true;
    document.getElementById("f2ln").disabled = true;
    document.getElementById("f2ma").disabled = true;
    document.getElementById("f2fe").disabled = true;
    document.getElementById("f2namesave").style.display = "none";
    document.getElementById("f2penn").style.display = "";
}



function f2phremoveDisable() {
    document.getElementById("f2pht").disabled = false;
    document.getElementById("f2phn").disabled = false;
    document.getElementById("f2phc").disabled = false;
    document.getElementById("f2php").style.display = "";
    document.getElementById("f2phsave").style.display = "";
    document.getElementById("f2penph").style.display = "none";
}
function f2phaddDisable() {
    document.getElementById("f2pht").disabled = true;
    document.getElementById("f2phn").disabled = true;
    document.getElementById("f2phc").disabled = true;
    document.getElementById("f2php").style.display = "none";
    document.getElementById("f2phsave").style.display = "none";
    document.getElementById("f2penph").style.display = "";
}
