// Attributes 
// --> To get the attribute value
let div = document.querySelector("div");
console.dir(div);

let id = div.getAttribute("id");
console.dir(id);

let name = div.getAttribute("name");
console.dir(name);

let para = document.querySelector("p");
console.dir(para.getAttribute("class"));


// --> To set the attribute value
let para = document.querySelector("p");
console.dir(para.setAttribute("class","newClass"))

// Style 
let div1 = document.querySelector("div");
            console.dir(div1);
div1.style.backgroundColor = "green";
div1.style.backgroundColor = "purple";
div1.style.fontSize = "20px";
div1.innerText = "Hello!";