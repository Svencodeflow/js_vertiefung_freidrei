{/* 
<b>Brief und Postkarte</b> <br>
    L: 10 - 23,5 cm
    B: 7 - 12,5 cm
    H: bis 1 cm

<b>DHL Paket 2 kg</b> <br>
    bis 60 x 30 x 15 cm

<b>DHL Paket 5 kg</b> <br>
    bis 120 x 60 x 60 cm

<b>DHL Paket 10 kg</b> <br>
    bis 120 x 60 x 60 cm

"<b>Extra große Größe</b> 
*/}

const paket = document.getElementById("mylist");

function showtxt() {
    let text;
    let vali = paket.value
    console.log(vali);

    switch (vali) {
        case "0":
            text = "<b>Brief und Postkarte</b> <br> L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm";
            break;
        case "1":
            text = "<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm";
            break;
        case "2":
            text = "<b>DHL Paket 5 kg</b> <br> bis 120 x 60 x 60 cm";
            break;
        case "3":
            text = "<b>DHL Paket 10 kg</b> <br> bis 120 x 60 x 60 cm";
            break;
        default:
            text = "<b>Extra große Größe</b>";
            break;
    }
    document.getElementById("masse").innerHTML = text;
}