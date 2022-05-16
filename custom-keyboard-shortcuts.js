/*Note that the use of the keyCode attribute on the key event should be 
avoided as MDN considers it a deprecated attribute. Therefore, the key 
attribute is used instead.*/

const shortcutNotClickedTextRef = document.getElementsByClassName("shortcut-not-clicked-text")[0];
const shortcutClickedTextRef = document.getElementsByClassName("shortcut-clicked-text")[0];

// Keep track of clicked keys
var isKeyPressed = {
    'a': false, // ASCII code for 'a'
    'b': false, // ASCII code for 'b'
    // ... Other keys to check for custom key combinations
};

document.onkeydown = (keyDownEvent) => {

    //Prevent default key actions, if desired
    keyDownEvent.preventDefault();

    // Track down key click
    isKeyPressed[keyDownEvent.key] = true;

    // Check described custom shortcut
    if (isKeyPressed["a"] && isKeyPressed["b"]) { //for example we want to check if a and b are clicked at the same time
        //do something as custom shortcut (a & b) is clicked

        // show text indicating shortcut is clicked
        displayShortcutClickedText();
    };
}

document.onkeyup = (keyUpEvent) => {

    // Prevent default key actions, if desired
    keyUpEvent.preventDefault();

    // Track down key release
    isKeyPressed[keyUpEvent.key] = false;

    // when one of the keys is released, show text indicating
    // text is no longer clicked
    if (!isKeyPressed["a"] || !isKeyPressed["b"]) {
        hideShortcutClickedText();
    };
};

function displayShortcutClickedText() {
    shortcutClickedTextRef.style.display = "flex";
    shortcutNotClickedTextRef.style.display = "none";
}

function hideShortcutClickedText() {
    shortcutClickedTextRef.style.display = "none";
    shortcutNotClickedTextRef.style.display = "flex";
}