console.log("hello motherfucker");


const alter = document.getElementById("age");


function checkAge() {
    alter.value >= 18 ? document.getElementById("ergebniss").innerHTML = "Volljährig" : document.getElementById("ergebniss").innerHTML = "Minderjährig"
}