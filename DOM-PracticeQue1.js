/* Create a new button element. Give it a text "Click me", background color of red & text color white.

    insert the button as the first element inside the body tag.
    */

let btn  = document.createElement("button");
btn.innerText = "Click me!";
console.dir(btn);
btn.style.backgroundColor = "red";
btn.style.color = "white";

let body = document.querySelector("body");
body.prepend(btn);
