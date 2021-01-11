(function (window) {
    'use strict';
    var App = window.App || {};

    function TopHandler(viewSelector, counterSelector) {
      if(!viewSelector || !counterSelector){
        throw new Error("All the required selectors were not provided");
      }

      this.viewElement = document.querySelector(viewSelector);
      this.counterElement = document.querySelector(counterSelector);
      this.savedEquations = 0;

      if(!this.viewElement|| !this.counterElement){
        throw new Error("Some selectors did not match any elements");
      }
    }

    TopHandler.prototype.increaseCounterAndViewElement = function (fn) {
      this.savedEquations++;
    //  this.counterElement.textContent = "Equations saved: " + this.savedEquations;
      this.viewElement.textContent = "Show History";
      fn(this.savedEquations);
    };
    TopHandler.prototype.clearCounterAndViewElement = function () {
      this.counterElement.textContent = "";
      this.savedEquations = 0;
      this.viewElement.textContent = "Show History";
    };
    TopHandler.prototype.addViewButtonHandler = function (fn) {
        this.viewElement.addEventListener("click", function (event) {
            event.preventDefault();
            fn();
        });
    };
    TopHandler.prototype.setFromMemory = function (numberOfOperations) {
      this.savedEquations = numberOfOperations;
      //this.counterElement.textContent = "Equations saved: " + numberOfOperations;
      this.viewElement.textContent = "Show History";
    };

App.TopHandler = TopHandler;
window.App = App;
})(window);
