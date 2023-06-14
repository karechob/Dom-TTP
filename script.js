// 1 - Select the section with an id of container without using querySelector.
const containerElement = document.getElementById("container");
console.log(containerElement);

// 2 - Select the section with an id of container using querySelector.
console.log(document.querySelector("#container"));

// 3 - Select all of the list items with a class of "second".
console.log(document.getElementsByClassName("second"));

// 4 - Select a list item with a class of third, but only the list item inside of the ol tag.

const olTags = document.getElementsByTagName("ol");
console.log(olTags[0].getElementsByClassName("third")[0]);

// 5 - Give the section with an id of container the text "Hello!".

const containerHello = document.getElementById("container");
containerHello.innerHTML += "Hello!";

// 6 - Add the class main to the div with a class of footer.

const footerClass = document.querySelector(".footer");
footerClass.classList.add("main");

// 7 - Remove the class main on the div with a class of footer.

footerClass.classList.remove("main");

// 8 - Create a new li element.

const listElement = document.createElement("li");

// 9 - Give the li the text "four".

listElement.textContent = "four";

// 10 - Append the li to the ul element.

const ulElement = document.getElementsByTagName("ul");
ulElement[0].appendChild(listElement);

// 11 - Loop over all of the lis inside the ol tag and give them a background color of "green".

const lisElements = olTags[0].getElementsByTagName('li');
for(let i = 0; i < lisElements.length; i++) {
    lisElements[i].style.backgroundColor = 'green';
}

// 12 - Remove the div with a class of footer.

const divFooter = document.querySelector('.footer');
divFooter.remove();