let timer = 223;
let topCB = true;
let rightCB = true;
let bottomCB = true;
let leftCB = true;

setInterval(function () {
    let element = document.getElementById('maBody');
    timer += -1;
    element.style.backgroundColor = `hsl(${timer % 360}, 61%, 51%)`;
}, 25);



function hover(target) {
    const box = document.getElementById(target);
    const paddingSlider = document.getElementById('sl-padding');
    const borderSlider = document.getElementById('sl-border');
    const marginSlider = document.getElementById('sl-margin');
    const elementPaddingStat = document.getElementById('padding');
    const elementBorderStat = document.getElementById('border');
    const elementMarginStat = document.getElementById('margin');
    const elementPaddingStatPx = document.getElementById('paddingPx');
    const elementBorderStatPx = document.getElementById('borderPx');
    const elementMarginStatPx = document.getElementById('marginPx');

    // set color
    if (target === "padding-box") {
        box.style.backgroundColor = 'rgb(255, 0, 0)';
    } else if (target === "border-box") {
        box.style.backgroundColor = 'rgb(0, 255, 106)';
    } else {
        box.style.backgroundColor = 'rgb(255, 157, 0)';
    }

    // set stat, padding and border
    if (target === "padding-box") {
        paddingSlider.addEventListener('input', function () {
            const newValue = this.value;
            elementPaddingStat.innerHTML = `${newValue / 25} rem`;
            elementPaddingStatPx.innerHTML = `${Math.round(newValue / 25 * 16)} px`;
            setPadding(box, newValue);

            if (newValue === '0') {
                box.style.borderWidth = "0px";
            } else {
                box.style.borderWidth = "2px";
            }
        });

    } else if (target === "border-box") {
        borderSlider.addEventListener('input', function () {
            const newValue = this.value;
            elementBorderStat.innerHTML = `${newValue / 25} rem`;
            elementBorderStatPx.innerHTML = `${Math.round(newValue / 25 * 16)} px`;
            setPadding(box, newValue);
            if (newValue === '0') {
                box.style.borderWidth = "0px";
            } else {
                box.style.borderWidth = "2px";
            }
        });

    } else {
        marginSlider.addEventListener('input', function () {
            const newValue = this.value;
            elementMarginStat.innerHTML = `${newValue / 25} rem`;
            elementMarginStatPx.innerHTML = `${Math.round(newValue / 25 * 16)} px`;
            setPadding(box, newValue);
            if (newValue === '0') {
                box.style.borderWidth = "0px";
            } else {
                box.style.borderWidth = "2px";
            }
        });
    }
}

function stopHover(target) {
    const box = document.getElementById(target);
    if (target === "padding-box") {
        box.style.backgroundColor = 'rgb(168, 38, 80)';
    } else if (target === "border-box") {
        box.style.backgroundColor = 'rgb(21, 185, 141)';
    } else {
        box.style.backgroundColor = 'rgb(168, 129, 80)';
    }

}

function setSliderType(element) {
    console.log(element.checked);
    console.log(element.value);
    if (element.value === "padding-top") {
        topCB = element.checked;
        // console.log("top " + element.checked);
    } else if (element.value === "padding-right") {
        rightCB = element.checked;
    } else if (element.value === "padding-bottom") {
        bottomCB = element.checked;
    } else if (element.value === "padding-left") {
        leftCB = element.checked;
    }
}



function setPadding(box, newValue) {

    if (topCB) {
        box.style.paddingTop = newValue / 25 + "rem";
    }
    if (rightCB) {
        box.style.paddingRight = newValue / 25 + "rem";
    }
    if (bottomCB) {
        box.style.paddingBottom = newValue / 25 + "rem";
    }
    if (leftCB) {
        box.style.paddingLeft = newValue / 25 + "rem";
    }
}





