// ------------------- Aufgabe 1_2 ----------------------
function myFunction() {
    let a = document.getElementsByClassName("example")

    if (a[0].style.backgroundColor == "black") {
        for (i = 0; i < a.length; i++) {
            a[i].style.backgroundColor = "#666";

            if (a[i].nodeName == "BUTTON") {
                with (a[i].style) {
                    color = "black";
                    backgroundColor = "rgb(237, 236, 237)"
                }
            }
        }
    }

    else {
        for (i = 0; i < a.length; i++) {
            a[i].style.backgroundColor = "black";

            if (a[i].nodeName == "BUTTON") {
                a[i].style.color = "#fff";
            }
        }
    }
}

// ------------------- Aufgabe 2_3 ----------------------
let clickMe = document.getElementById('navChange');

clickMe.addEventListener('click', () => {
    document.getElementsByTagName('a')[0].style.backgroundColor = "#f6c89f";
    document.getElementsByTagName('a')[1].style.backgroundColor = "#ffe7d1";
    document.getElementsByTagName('a')[2].style.backgroundColor = "#4b8e8d";
    document.getElementsByTagName('a')[3].style.backgroundColor = "#396362";
})

// ------------------- Aufgabe 2_4 ----------------------
let btn = document.querySelector('#button');
let chk = document.querySelector('#farbeAuswahlen');
let bgColor;

btn.addEventListener('click', () => {
    document.getElementsByTagName('form')[0].style.backgroundColor = bgColor;
});

chk.addEventListener('change', () => {
    bgColor = chk.value.replace(/ /g, "");
})