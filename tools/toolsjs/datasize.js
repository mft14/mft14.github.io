const datasizes = ['bit','byt','kby','kib','mby','meb','gby','gib','tby','teb'];

function calc(eingabe) {
    var bytes = 0;

    for (i = 0; i<datasizes.length; i++) { //go through the array, match the correct field

        if (eingabe == datasizes[i]) { //first calculate down to BYTES
            if(datasizes[i] == "bit") { bytes = document.getElementById(datasizes[i]).value / 8; rickroll(i,bytes); }
            if(datasizes[i] == "byt") { bytes = document.getElementById(datasizes[i]).value ; rickroll(i,bytes); }
            if(datasizes[i] == "kby") { bytes = document.getElementById(datasizes[i]).value * Math.pow(10, 3); rickroll(i,bytes); }
            if(datasizes[i] == "mby") { bytes = document.getElementById(datasizes[i]).value * Math.pow(10, 6); rickroll(i,bytes); }
            if(datasizes[i] == "gby") { bytes = document.getElementById(datasizes[i]).value * Math.pow(10, 9); rickroll(i,bytes); }
            if(datasizes[i] == "tby") { bytes = document.getElementById(datasizes[i]).value * Math.pow(10,12); rickroll(i,bytes); }
            if(datasizes[i] == "kib") { bytes = document.getElementById(datasizes[i]).value * Math.pow(2, 10); rickroll(i,bytes); }
            if(datasizes[i] == "meb") { bytes = document.getElementById(datasizes[i]).value * Math.pow(2, 20); rickroll(i,bytes); }
            if(datasizes[i] == "gib") { bytes = document.getElementById(datasizes[i]).value * Math.pow(2, 30); rickroll(i,bytes); }
            if(datasizes[i] == "teb") { bytes = document.getElementById(datasizes[i]).value * Math.pow(2, 40); rickroll(i,bytes); }
        }
    } //for loop end
}

function rickroll(skip,bytesize) {
    for (i = 0; i<datasizes.length; i++) { //go through the array, match the correct field
        if(skip == i) { i++; } //skip the one that you type in otherwise you couldnt type more than two digits
        document.getElementById(datasizes[i]).value = mathe(i, bytesize); //print everything out
    }
}

function mathe(whatdata, bytesize) { //Calculates from byte to the other sizes
    if (whatdata == 0) { return bytesize * 8; }
    if (whatdata == 1) { return bytesize ; }
    if (whatdata == 2) { return bytesize / Math.pow(10, 3); } //KB
    if (whatdata == 4) { return bytesize / Math.pow(10, 6); } //MB
    if (whatdata == 6) { return bytesize / Math.pow(10, 9); } //GB
    if (whatdata == 8) { return bytesize / Math.pow(10,12); } //TB
    if (whatdata == 3) { return bytesize / Math.pow(2, 10); } //KiB
    if (whatdata == 5) { return bytesize / Math.pow(2, 20); } //MeB
    if (whatdata == 7) { return bytesize / Math.pow(2, 30); } //GiB
    if (whatdata == 9) { return bytesize / Math.pow(2, 40); } //TeB
}

function reset() {
    document.getElementById('bit').value = 0; document.getElementById('byt').value = 0;
    document.getElementById('kby').value = 0; document.getElementById('kib').value = 0;
    document.getElementById('mby').value = 0; document.getElementById('meb').value = 0;
    document.getElementById('gby').value = 0; document.getElementById('gib').value = 0;
    document.getElementById('tby').value = 0; document.getElementById('teb').value = 0;
}
