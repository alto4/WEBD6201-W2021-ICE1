// IIFE - Immediate Invoked Function Expression
//      - AKA Ananymous Self-Executing Function
//      - Closure - limits scope leak

// use strict forces variables to be declared as let, var, or const
"use strict";

(function () {
  function displayHome() {
    let paragraphOneText =
      "This is a simple site to demonstrate DOM Manipulation for ICE 1";
    let paragraphOneElement = document.getElementById("paragraphOne");

    paragraphOneElement.textContent = paragraphOneText;
    paragraphOneElement.className = "fs-5 text-success";

    // Create new element in memory
    let newParagraph = document.createElement("p");
    // Configure element
    newParagraph.setAttribute("id", "paragraphTwo");
    newParagraph.textContent = "...paragraph two injected into DOM!";
    newParagraph.className = "fs-5 text-danger";
    // Select the parent element
    let heroContainer = document.querySelector(".hero");
    // Inject element into the DOM
    heroContainer.appendChild(newParagraph);

    // Alternate way to inject element
    let paragraphDiv = document.createElement("div");
    let paragraphThree = `<p id="paragraphThree" class="fs-7 fw-bold">This is the third paragraph, set in the middle using .before().</p>`;
    paragraphDiv.innerHTML = paragraphThree;

    // Insert new paragraph -> .before inserts right before node
    // newParagraph.before(paragraphDiv);
    newParagraph.after(paragraphDiv);

    // Deletion
    // paragraphOneElement.remove();
    heroContainer.removeChild(paragraphOneElement);

    // Update
    //heroContainer.firstElementChild.textContent = 'Hello there friends on the internet.';

    heroContainer.innerHTML = `<h1 id="firstHeading">Welcome to WEBD6201 - Lab 1</h1>
    <p id="paragraphOne" class="fs-3 fw-bold text-success">This is my first paragraph</p>
    `;
  }
  function displayAbout() {}
  function displayProjects() {}
  function displayServices() {}
  function displayContact() {}

  function Start() {
    console.log("App started...");

    // Call corresponding render functions based on title of current page using switch statement
    switch (document.title) {
      case "Home":
        displayHome();
        break;
      case "About":
        displayAbout();
        break;
      case "Projects":
        displayProjects();
        break;
      case "Services":
        displayServices();
        break;
      case "Contact":
        displayContact();
        break;
    }
  }

  window.addEventListener("load", Start);
})();
