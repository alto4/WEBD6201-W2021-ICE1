// IIFE - Immediate Invoked Function Expression
//      - AKA Ananymous Self-Executing Function
//      - Closure - limits scope leak

(function ()
{
  function Start()
  {
    console.log('App started...');
  }

  window.addEventListener('load', Start);

})();