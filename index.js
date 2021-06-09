var color;

function addStatusRgba() {

    document.querySelectorAll("button")[0].classList.remove("btn-primary");
    document.querySelectorAll("button")[0].classList.add("btn-success");
    document.querySelectorAll("button")[1].classList.remove("btn-success");
    document.querySelectorAll("button")[1].classList.add("btn-primary");

}

function colorFlip() {
    if (document.querySelectorAll("button")[0].classList.contains("btn-success")) {
        color = rgbaColorFlip();
        document.querySelectorAll("body")[0].style = "background-color:" + color;
        document.getElementsByTagName("label")[0].innerHTML = "Background Color: " + color;

    } else if (document.querySelectorAll("button")[1].classList.contains("btn-success")) {
        color = hexColorFlip();
        document.querySelectorAll("body")[0].style = "background-color:" + color;
        document.getElementsByTagName("label")[0].innerHTML = "Background Color: " + color;
    }
}

function addStatusHex() {

    document.querySelectorAll("button")[1].classList.remove("btn-primary");
    document.querySelectorAll("button")[1].classList.add("btn-success");
    document.querySelectorAll("button")[0].classList.remove("btn-success");
    document.querySelectorAll("button")[0].classList.add("btn-primary");
}

function rgbaColorFlip() {

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var alpha = (Math.floor(Math.random() * 100)) / 100;

    var rgbaColorCode = "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";

    return rgbaColorCode;
}

function hexColorFlip() {

    var red1 = Math.floor(Math.random() * 16);
    if (red1 > 9) {
        if (red1 == 10) {
            red1 = "a";
        } else if (red1 == 11) {
            red1 = "b";
        } else if (red1 == 12) {
            red1 = "c";
        } else if (red1 == 13) {
            red1 = "d";
        } else if (red1 == 14) {
            red1 = "e";
        } else if (red1 == 15) {
            red1 = "f";
        } else {
            console.log("error");
        }
    }

    var red2 = Math.floor(Math.random() * 16);
    if (red2 > 9) {
        if (red2 == 10) {
            red2 = "a";
        } else if (red2 == 11) {
            red2 = "b";
        } else if (red2 == 12) {
            red2 = "c";
        } else if (red2 == 13) {
            red2 = "d";
        } else if (red2 == 14) {
            red2 = "e";
        } else if (red2 == 15) {
            red2 = "f";
        } else {
            console.log("error");
        }
    }

    var green1 = Math.floor(Math.random() * 16);
    if (green1 > 9) {
        if (green1 == 10) {
            green1 = "a";
        } else if (green1 == 11) {
            green1 = "b";
        } else if (green1 == 12) {
            green1 = "c";
        } else if (green1 == 13) {
            green1 = "d";
        } else if (green1 == 14) {
            green1 = "e";
        } else if (green1 == 15) {
            green1 = "f";
        } else {
            console.log("error");
        }
    }

    var green2 = Math.floor(Math.random() * 16);
    if (green2 > 9) {
        if (green2 == 10) {
            green2 = "a";
        } else if (green2 == 11) {
            green2 = "b";
        } else if (green2 == 12) {
            green2 = "c";
        } else if (green2 == 13) {
            green2 = "d";
        } else if (green2 == 14) {
            green2 = "e";
        } else if (green2 == 15) {
            green2 = "f";
        } else {
            console.log("error");
        }
    }

    var blue1 = Math.floor(Math.random() * 16);
    if (blue1 > 9) {
        if (blue1 == 10) {
            blue1 = "a";
        } else if (blue1 == 11) {
            blue1 = "b";
        } else if (blue1 == 12) {
            blue1 = "c";
        } else if (blue1 == 13) {
            blue1 = "d";
        } else if (blue1 == 14) {
            blue1 = "e";
        } else if (blue1 == 15) {
            blue1 = "f";
        } else {
            console.log("error");
        }
    }

    var blue2 = Math.floor(Math.random() * 16);
    if (blue2 > 9) {
        if (blue2 == 10) {
            blue2 = "a";
        } else if (blue2 == 11) {
            blue2 = "b";
        } else if (blue2 == 12) {
            blue2 = "c";
        } else if (blue2 == 13) {
            blue2 = "d";
        } else if (blue2 == 14) {
            gblue2 = "e";
        } else if (blue2 == 15) {
            blue2 = "f";
        } else {
            console.log("error");
        }
    }

    var hexColorCode = "#" + red1 + "" + red2 + "" + green1 + "" + green2 + "" + blue1 + "" + blue2;

    return hexColorCode;

}