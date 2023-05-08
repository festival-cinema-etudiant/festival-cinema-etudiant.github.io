
var fabIsOpen = false;

function openFab(){
    var elements = document.getElementsByClassName("fabSatellite");
    if (fabIsOpen == true){
        hideSatellites(elements);
        fabIsOpen = false;
    }else{
        showSatellites(elements);
        fabIsOpen = true;
    }
}


function hideSatellites(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.visibility = "hidden";
    }
}

function showSatellites(elements) {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.visibility = "visible";
    }
}
