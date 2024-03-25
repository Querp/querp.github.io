/* description-name, description-link, description */
const descriptions = [
    ["ChatGPT", "https://chat.openai.com/", 'ChatGPT is een taalmodel dat getraind is op grote hoeveelheden tekstgegevens van het internet, waardoor het mensachtige tekstreacties kan begrijpen en genereren. Ontwikkelaars kunnen ChatGPT integreren in hun toepassingen via een API. Door tekstprompten naar het model te sturen, kunnen ontwikkelaars reacties ontvangen die contextueel relevant en samenhangend zijn. Dit kan nuttig zijn voor taken zoals het genereren van inhoud, het bieden van geautomatiseerde antwoorden in chatbots, of het ondersteunen van gebruikers bij verschillende taken voor natuurlijke taalverwerking. ChatGPT kan worden gebruikt om bepaalde tekstuele taken te automatiseren, contextuele suggesties te bieden, of zelfs codefragmenten te genereren op basis van invoervragen. De mogelijkheden strekken zich uit tot taken die verder gaan dan alleen communicatie, waaronder inhoudsgeneratie, samenvattingen en meer.'],
    ["W3C HTML Validator", "https://validator.w3.org/", "Deze website is een W3C HTML Validator die HTML-code controleert op conformiteit met webstandaarden, zoals vastgesteld door het World Wide Web Consortium (W3C). Het biedt gebruikers een gedetailleerd rapport over eventuele fouten en aanbevelingen voor verbetering."],
    ["W3C CSS Validator", "https://jigsaw.w3.org/css-validator/", "Deze website is de W3C CSS Validator, een online tool die ontwikkelaars helpt om de geldigheid van hun CSS-code te controleren volgens de standaarden van het World Wide Web Consortium (W3C). Gebruikers kunnen hun CSS-bestanden uploaden of invoeren en ontvangen vervolgens een gedetailleerd rapport met eventuele fouten, waarschuwingen en suggesties voor verbetering. Dit helpt ontwikkelaars om problemen op te sporen en op te lossen, wat bijdraagt aan een betere consistentie en weergave van hun webpagina's in verschillende webbrowsers."],
    ["Specificity Calculator", "https://specificity.keegan.st/", "Deze website is een online tool genaamd 'Specificity Calculator' die ontwikkelaars helpt bij het berekenen van de specificiteit van CSS-selectors. Gebruikers kunnen CSS-selectors invoeren en de tool berekent vervolgens de specificiteit ervan. Het resultaat wordt weergegeven als een numerieke waarde, waarbij hogere waarden een hogere specificiteit aangeven. Dit helpt ontwikkelaars om beter te begrijpen hoe CSS-regels worden toegepast en prioriteiten worden bepaald in hun stijlbladen, waardoor ze efficiënter kunnen werken en conflicten in styling kunnen oplossen."],
];


// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select all anchor elements inside elements with class 'links'
    const links = document.querySelectorAll('.links a');

    // Iterate over each link
    links.forEach(link => {
        // Add event listener for mouseenter event
        link.addEventListener('mouseenter', function () {
            // Get the ID of the hovered link
            const linkId = link.id;
            // Remove "bron", and turn into number
            const id = Number(linkId.substring(4));
            // Get description of ID from array
            const descrName = descriptions[id][0];
            const descrLink = descriptions[id][1];
            const descr = descriptions[id][2];

            // Fill element with id "container" with description 
            document.getElementById("description-name").textContent = descrName;
            document.getElementById("description-link").textContent = descrLink;
            document.getElementById("description").textContent = descr; 
        });
    });
});