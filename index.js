
document.addEventListener('DOMContentLoaded', function () {
// Create JS Flavors of Froyo

const Froyo = [ "Vanilla", "Chocolate", "Strawberry", "Rocky Road"]
console.log(Froyo);
const addedFlavors = [];

const buttons = document.querySelectorAll(".addButton");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      console.log("You have added " + Froyo[i] + " to your order.");
      addedFlavors.push(Froyo[i]);
      console.log(addedFlavors);
    });
  }

const startOverButton = document.querySelector(".startOverButton");
   startOverButton.addEventListener("click", function() {
    if (confirm("Are you sure you want to start over?")) {
      console.clear();
      console.log("You have started over.");
    } 
    else {  console.log("Continue Order."); 
  }
  });
});
  