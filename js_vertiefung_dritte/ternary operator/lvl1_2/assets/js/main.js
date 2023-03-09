
const passw = document.getElementById("pass");


function save() {
    let pass1 = passw.value
    console.log(pass1.length);
    pass1.length >= 8 ? document.getElementById("lang").innerHTML = "Passwort ist lang genug! Willkommen" : document.getElementById("short").innerHTML = "Passwort ist zu kurz";
}