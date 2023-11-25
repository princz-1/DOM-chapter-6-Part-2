// Insert Element
let newBtn = document.createElement("button");
console.dir(newBtn);
newBtn.innerText = "Click me!";

let div = document.querySelector("div");

div.append(newBtn);// adds at the end of node(inside)

div.prepend(newBtn);//adds at the start of node (nside)

div.before(newBtn); //adds before the node (Outside)

div.after(newBtn); // adds after the node (outside)


// after paragraph add the button
let p = document.querySelector("p");
p.after(newBtn);

// Add the heading
let newHeading  = document.createElement("h1");
console.dir(newHeading);
newHeading.innerHTML = "<i>I am New!</i>";

let body = document.querySelector("body");
body.prepend(newHeading);


// --> Delete Element
let p = document.querySelector("p");
p.remove(p); // Removes the node
