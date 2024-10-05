function makeTextBigger() {
    alert("Hello, world!");
    document.getElementById("textInput").style.fontSize = '24pt';
}

function applyTextStyles() {
    var textArea = document.getElementById("textInput");

    if (document.getElementById("fancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooifyText() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value.toUpperCase();
    
    var sentences = text.split(".");
    
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            words[words.length - 1] += "-MOO";
        }
        sentences[i] = words.join(" ");
    }
    
    textArea.value = sentences.join(". ");
}