
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