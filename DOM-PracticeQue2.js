/* Create a <p> tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element.

Did you notice, how you overwrite the class name when you add a new one ?
solve this problem using classList;
*/

let para = document.querySelector("p");
console.dir(para);

//add the class 
para.classList.add("myClass");
//remove the class
//para.classList.remove("myClass");
