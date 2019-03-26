// 1-4
function rowCont() {
    var element = document.querySelector("div");
    element.style.flexDirection = "row";
}

function column() {
    document.querySelector("div").style.flexDirection = "column";
}

function columnContent() {
    document.querySelector("#container").style.flexDirection = "column";
    document.querySelector("innerContainer").style.flexDirection = "row";

}



function rowContent() {
    document.querySelector("#container").style.flexDirection = "row";
    document.querySelector("innerContainer").style.flexDirection = "column";

}


// 5-8

function stretchContent() {
    document.querySelector("div").style.justifyContent = "stretch";
}


function spaceContent() {
    document.querySelector("div").style.justifyContent = "space-between";
}

function spaceAroundContent() {
    document.querySelector("div").style.justifyContent = "space-around";
}

function flexEndContent() {
    document.querySelector("div").style.justifyContent = "flex-end";
}

// 9-12

function stretchAlignContent() {
    document.querySelector("div").style.alignItems = "stretch";
}

function flexAlignContent() {
    document.querySelector("div").style.alignItems = "flex-start";
}

function centerAlignContent() {
    document.querySelector("div").style.alignItems = "center";
}

function flexAlignContent() {
    document.querySelector("div").style.alignItems = "flex-end";
}