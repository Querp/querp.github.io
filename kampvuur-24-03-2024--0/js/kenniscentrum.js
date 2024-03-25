function hideAnswer(postID) {
    let vraag = document.getElementById("vraag-button" + postID);
    let antwoord = document.getElementById("antwoord-section" + postID);
    if (antwoord.style.display != "block") {
        // show answer
        antwoord.style.display = "block";
        vraag.style.whiteSpace = 'wrap';
    } else {
        // hide answer
        antwoord.style.display = "none";
        vraag.style.whiteSpace = 'noWrap';
    }
}


