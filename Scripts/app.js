// IIFE - Immediate Invoked Function Expression
//      - AKA Ananymous Self-Executing Function
//      - Closure - limits scope leak

// use strict forces variables to be declared as let, var, or const
"use strict";

(function ()
{
  function Start()
  {
    console.log('App started...');

    let heroContainer = document.querySelector('.hero');
    let paragraphOneText = 'This is a simple site to demonstrate DOM Manipulation for ICE 1';
    let paragraphOneElement = document.getElementById('paragraphOne');
 
    paragraphOneElement.textContent = paragraphOneText;
    paragraphOneElement.className = 'fs-5 text-success';
    heroContainer.className = 'text-center my-5';

    // Create new element in memory
    let newParagraph = document.createElement('p');
    // Configure element
    newParagraph.setAttribute('id', 'paragraphTwo');
    newParagraph.textContent = '...paragraph two injected into DOM!';
    newParagraph.className = 'fs-5 text-danger'
    // Inject element into the DOM
    heroContainer.appendChild(newParagraph);

    let paragraphThree = `<p class="fs-7 fw-bold">And finally, here is the paragraph three.</p>`;
    heroContainer.innerHTML += paragraphThree;
  }

  window.addEventListener('load', Start);

})();