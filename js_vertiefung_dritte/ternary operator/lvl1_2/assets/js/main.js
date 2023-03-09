
const passw = document.getElementById("pass");

function save() {
    let pass1 = passw.value;
    let text;
    let farbe = document.getElementById("short_lang")
    pass1.length >= 8 ? text = "Passwort ist lang genug! Willkommen" : text = "Passwort ist zu kurz";
    if (pass1.length >= 8) {
        farbe.style.color = "green"
    }else {
        text
        farbe.style.color = "red"
    }
    document.getElementById("short_lang").innerHTML = text
}


