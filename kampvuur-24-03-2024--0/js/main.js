// https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib

// keep all posts' folded-status when regenerating posts?
// perhaps only for the posts that remain visible after applying filter/language options

// sort logic???
// order the filter-groups based on new sort logic

// Alternatieve architectuur overwegen:
// -Maak 1 onzichtbare posts in HTML, en maak een kopie wanneer er een niewe post nodig is.
// -Is het mogelijk/handig om elementen alleen anders te rangschikken en te verbergen, 
// in plaats van ze elke keer allemaal opnieuw te maken?

// Maak een programma voor post-input 
// Bijvoorbeel een formulier dat naar .json schrijft

// bug: check logica, wat doet een 'filter'?
// add category: self-help/care
// make category 'Kantoorzaken' more prominent
// make (question + tags) clickable
// show/hide tag-groups



let posts;
let checkedTags = [];
let postsStyle =  "nl";

// 1. When the page is fully loaded
document.addEventListener("DOMContentLoaded", function (event) {
  fetchPosts().then(returned => {  // 2. Fetch .json data  
    // 4. Data has been loaded, continue here...
    // 5. Assign the value to the global variable "posts"
    posts = returned;
    checkedTags = getCheckedTags();
    generateAllPosts();
  });
});

// 3. Fetch .json data
async function fetchPosts() {
  const response = await fetch('js/posts.json');
  let returned = await response.json();
  return returned;
}

function generateAllPosts() {
  /* laad alle posts */
  for (let i = 0; i < posts.length; i++) {
    addPost(i);
  }
}

function toggleCheckbox(tag) {
  checkedTags = getCheckedTags();
  deleteAllPosts();
  generatePosts();
}

function toggleCheckboxGroup(tagGroup) {  
  // get list of all checkbox elements
  let checkboxes = document.getElementsByClassName('filter-' + tagGroup);
  // check if all boxes in group have been checked 
  let checked;
  if (isWholeGroupChecked(checkboxes)) {
    checked = true;
  } else {
    checked = false;
  }
  // toggle the group of boxes
  setCheckboxGroup(checkboxes, checked)
  checkedTags = getCheckedTags();
  deleteAllPosts();
  generatePosts();
}

function isWholeGroupChecked(checkboxes) {
  // Loop through each checkbox and check if it's checked
  for (let i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      // if this box is not checked, the whole group isn't 
      return false;
    }
  }
  // if no unchecked box has been found, then
  // the whole group is checked = true
  return true;
}

function setCheckboxGroup(checkboxes, checked) {
  // loop through the list
  for (let i = 0; i < checkboxes.length; i++) {
    // console.log(checkboxes[i]); 
    // check each checkbox  
    checkboxes[i].checked = !checked;
  }
}

function deleteAllPosts() {
  // Select all elements with a specific class
  let elementsToRemove = document.querySelectorAll('.post');
  // Loop through each selected element and remove it
  elementsToRemove.forEach(function (element) {
    element.remove();
  });
}

function generatePosts() {
  for (let i = 0; i < posts.length; i++) { // loop through all posts  
    let tags = posts[i].tags // get tags list
    let auteur = posts[i].auteur; // get author
    let datum = posts[i].datum; // get date 
    datum = datum.substring(3); // format date (mm-yyyy)
    let combinedTags = tags.concat(auteur, datum); // combine values into 1 list
    // compare the list with tags against the list of checked boxes        
    if (hasCommonElement(combinedTags, checkedTags)) {
      addPost(i); // create a new post if there is a match
    }
  }
}

// Return a list of all checked boxed
function getCheckedTags() {
  // Select all elements with class 'checkbox'
  let elements = document.querySelectorAll('.checkbox');
  let idList = [];
  elements.forEach(function (element) { // loop over each element
    if (element.checked) { // if the box is checked
      idList.push(element.id); // add the element's id to the idList 
    }
  });
  return idList
}

// Compare the list with post tags against the list of checked boxes
// Check if the post has ALL the tags
// BUG! this doesnt work for 'auteur' and 'date'
function hasCommonElement(arr1, arr2) {
  // console.log(arr1);  //post tags
  // console.log(arr2);  //checked boxes
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      return false; // post doesn't have the tag
    }
  }
  return true; // all tags match
}






























function addPost(postID) {
  // ----------------------------------------------------------------

  // <ARTICLE>
  // maak element <article></article>
  let newElement1 = document.createElement("article");
  let newElement2;
  let newElement3;
  let newElement4;
  let newElement5;
  let newElement6;

  // voeg id aan het element toe
  newElement1.setAttribute("id", "post" + postID);

  // voeg klassen aan het element toe 
  newElement1.classList.add("box");
  newElement1.classList.add("post");

  // zoek de referentie waarna het element geplaats moet worden 
  // id="kenniscentrum" is de wrapper voor sorteer en posts
  let position1 = document.getElementById("kenniscentrum");
  let position2;
  let position3;

  // plaats article na de div
  position1.insertAdjacentElement("beforeend", newElement1);

  // ----------------------------------------------------------------

  // <SECTION> x2 (vraag en antwoord)
  // maak element <section></section>
  newElement1 = document.createElement("section");
  newElement2 = document.createElement("section");

  // voeg id aan het element toe
  newElement1.setAttribute("id", "vraag-section" + postID);
  newElement2.setAttribute("id", "antwoord-section" + postID);

  // verberg antwoord per default
  newElement2.style.display = "none";

  // voeg klassen aan het element toe   
  newElement2.classList.add("antwoord");

  // zoek met een id naar de positie van een element,
  // waarbij dit element geplaats moet worden 
  position1 = document.getElementById("post" + postID);
  position2 = document.getElementById("post" + postID);

  // plaats section in het article
  position1.insertAdjacentElement("afterbegin", newElement1);
  position2.insertAdjacentElement("beforeend", newElement2);

  // ----------------------------------------------------------------

  // <UL>
  // maak element <ul></ul>
  newElement1 = document.createElement("ul");

  // voeg id aan het element toe
  newElement1.setAttribute("id", "vraag" + postID);

  // voeg klassen aan het element toe   
  newElement1.classList.add("tags");

  // zoek met een id naar de positie van een element,
  // waarbij dit element geplaats moet worden 
  position1 = document.getElementById("vraag-section" + postID);

  // plaats ul in de section
  position1.insertAdjacentElement("afterbegin", newElement1);

  // ----------------------------------------------------------------

  // <LI>
  // maak element <li></li>
  // 0    = auteur
  // 1   >= tags
  // last = datum
  createPostMeta(postID);

  // ----------------------------------------------------------------

  // <BUTTON>
  // maak element <button></button>
  newElement1 = document.createElement("button");

  // voeg id aan het element toe
  newElement1.setAttribute("id", "vraag-button" + postID);

  // voeg klassen aan het element toe 
  newElement1.classList.add("vraag-button");

  // voeg button type toe
  newElement1.setAttribute("type", "button");

  // voeg onclick parameter toe
  newElement1.setAttribute("onclick", "hideAnswer(" + postID + ")");

  // verzamel tekst
  newContent1 = document.createTextNode(posts[postID].vraag[postsStyle]);

  // Voeg tekst toe aan het element 
  newElement1.appendChild(newContent1);

  // zoek met een id naar de positie van een element,
  // waarbij dit element geplaats moet worden 
  position1 = document.getElementById("vraag-section" + postID);

  // plaats de button in de section
  position1.insertAdjacentElement("beforeend", newElement1);

  // ----------------------------------------------------------------

  // voeg antwoord aan post toe
  addAnswer(postID);
}

function createPostMeta(postID) {
  let elementList = [];
  let newElement;
  let newContent;
  let tagsAmount = posts[postID].tags.length + 2;

  for (let i = 0; i < tagsAmount; i++) { // loop tagsAmount times    
    newElement = document.createElement("li");
    if (i === 0) {
      newContent = document.createTextNode(posts[postID].auteur);
      newElement.setAttribute("id", "auteur" + postID);
    } else if (i === tagsAmount - 1) {
      newContent = document.createTextNode(posts[postID].datum);
      newElement.setAttribute("id", "datum" + postID);
    } else {      
      newContent = document.createTextNode(posts[postID].tags[i - 1]);
      newElement.setAttribute("class", "tag" + postID);
    }
    newElement.appendChild(newContent);
    let position = document.getElementById("vraag" + postID);
    position.insertAdjacentElement("beforeend", newElement);
  }
}

function addAnswer(postID) {
  console.log(postsStyle);
  console.log(posts[postID].antwoord[postsStyle]);
  let objectKey = Object.keys(posts[postID].antwoord[postsStyle]);

  let objectValue = Object.values(posts[postID].antwoord[postsStyle]);
  /* console.log("POST# " + postID + ", " + objectKey.length + " ITEMS"); */
  // console.log("POST# " + postID);

  for (let i = 0; i < objectKey.length; i++) {
    let key = objectKey[i];
    // maak een element van de object-sleutel, door het nummer te verwijderen
    key = key.substring(0, key.length - 2);
    // maak antwoord-deel   
    createAnswer(key, objectValue[i], postID);
  }
}

function createAnswer(answerElement, answerValue, postID) {
  // maak <element>
  newElement1 = document.createElement(answerElement);
  if (answerElement == "img") {
    // console.log("hey we have an img:  " + answerValue);
    // Voeg src en alt toe
    newElement1.src = answerValue;
    newElement1.alt = answerElement;
    newElement1.title = "POST" + postID + ": " + answerValue;
  } else {
    // Voeg tekst toe aan het element 
    newElement1.innerHTML = answerValue;
  }
  // zoek met een id naar de positie van een element,
  // waarbij dit element geplaats moet worden 
  position1 = document.getElementById("antwoord-section" + postID);
  // plaats het element in de DOM
  position1.insertAdjacentElement("beforeend", newElement1);
}




function setPostsStyle() {
  let selectElement = document.getElementById("postsStyle");
  // get the .value of <select>
  let selectedValue = selectElement.value;    
  postsStyle = selectedValue;
  // console.log(postStyle);
  console.log("Style has been changed to: " + postsStyle);  
  toggleCheckbox("yeah");

}


