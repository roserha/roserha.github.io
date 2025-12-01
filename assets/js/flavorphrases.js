let phrases = [
    "Computer Science | Mathematics | Astrophysics",
    "Currently putting a matrix in RREF!",
    "Statistically likely to be climbing right now",
    "Petting Honey Eclair and or Haley Luna!",
    "Refresh the page to see me (the text) change!",
    "Hello, World (Wide Web)!",
    "To C is to believe",
    "I think?, therefore I might?",
    "I'm running out of fun ideas for this...",
    "90% bug free! ...wait this should be 100%",
    "NP, P, what about LMNOP?",
    "Thinking about the stars",
    "cGxzIGhpcmUgbWUgOikgPDMgaW0gdmVyeSBwcm9mZXNo==",
    "62 65 65 70 20 62 6F 6F 70 20 63 6F 64 65 21",
    "01101000 01101001 00100001 00111010 00101001",
    "There is a ##% chance you're reading this." // this needs to be the last bc im lazy
];

$(document).ready(function() {
    if (Math.random() < 1.0 / 3) {
        // fun phrase time!

        let chosenId = Math.floor(phrases.length * Math.random())

        $("#flavor").html(`<i>${phrases[chosenId]}</i>`);

        if (chosenId == (phrases.length - 1)) {
            let probby = 100.0 / (3 * (phrases.length - 1))

            $("#flavor").text(`There is a ${probby.toFixed(2)}% chance you're reading this.`);
        }

        $("#flavornum").text(phrases.length - 1);
    }
});