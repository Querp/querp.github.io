function hover(target) {
    const box = document.getElementById(target);
    const paddingSlider = document.getElementById('sl-padding');
    const borderSlider = document.getElementById('sl-border');
    const marginSlider = document.getElementById('sl-margin');
    const elementPaddingStat = document.getElementById('padding');
    const elementBorderStat = document.getElementById('border');
    const elementMarginStat = document.getElementById('margin');

    // set color
    if (target === "padding-box") {
        box.style.backgroundColor = 'rgb(255, 0, 0)';
    } else if (target === "border-box") {
        box.style.backgroundColor = 'rgb(0, 255, 106)';
    } else {
        box.style.backgroundColor = 'rgb(255, 157, 0)';
    }

    // set stat and padding
    if (target === "padding-box") {
        paddingSlider.addEventListener('input', function () {
            const newValue = this.value;
            elementPaddingStat.innerHTML = `${newValue / 25} rem`;
            box.style.padding = newValue / 25 + "rem";
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
            box.style.padding = newValue / 25 + "rem";
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
            box.style.padding = newValue / 25 + "rem";
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
        box.style.backgroundColor = 'rgb(125, 64, 135)';
    } else if (target === "border-box") {
        box.style.backgroundColor = 'rgb(39, 145, 177)';
    } else {
        box.style.backgroundColor = 'rgb(119, 117, 141)';
    }

}







