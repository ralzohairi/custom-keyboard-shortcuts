/*Note that the use of the keyCode attribute on the key event should be 
avoided as MDN considers it a deprecated attribute. Therefore, the key 
attribute is used instead.*/


// 1) Keep track of clicked keys

// 2) Avoid keeping track of the ctrl key, the shift key and the alt key

// 3) Check whether the desired custom shortcut is clicked


const shortcutNotClickedTextRef = document.getElementsByClassName("shortcut-not-clicked-text")[0];
const shortcutClickedTextRef = document.getElementsByClassName("shortcut-clicked-text")[0];


function displayShortcutClickedText() {
    shortcutClickedTextRef.style.display = "flex";
    shortcutNotClickedTextRef.style.display = "none";
}

function hideShortcutClickedText() {
    shortcutClickedTextRef.style.display = "none";
    shortcutNotClickedTextRef.style.display = "flex";
}