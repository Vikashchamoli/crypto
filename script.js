// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "All") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));



let copy = (textId) => {
    //Selects the text in the <input> elemet
    document.getElementById(textId).select();
    
    //Copies the selected text to clipboard
    document.execCommand("copy");
    
  };

  const btn = document.getElementById('copy1');

//  Change button text on click
btn.addEventListener('click', function handleClick() {
  document.getElementById("cryptos").innerText="USDT( TRC20 ) or Tron address successfully copied."
  btn.textContent = 'Copied';
  btn2.textContent = 'Copy';
  btn3.textContent = 'Copy';
  btn4.textContent = 'Copy';
});

const btn2 = document.getElementById('copy2');

//  Change button text on click
btn2.addEventListener('click', function handleClick() {
  document.getElementById("cryptos").innerText="Bitcoin address successfully copied."
  btn2.textContent = 'Copied';
  btn.textContent = 'Copy';
  btn3.textContent = 'Copy';
  btn4.textContent = 'Copy';
});

const btn3 = document.getElementById('copy3');

//  Change button text on click
btn3.addEventListener('click', function handleClick() {
  document.getElementById("cryptos").innerText="USDT ( ERC20 ) or Etherium address successfully copied."
  btn3.textContent = 'Copied';
  btn2.textContent = 'Copy';
  btn.textContent = 'Copy';
  btn4.textContent = 'Copy';
});


const btn4 = document.getElementById('copy4');

//  Change button text on click
btn4.addEventListener('click', function handleClick() {
  document.getElementById("cryptos").innerText="Litecoin address successfully copied."
  btn4.textContent = 'Copied';
  btn3.textContent = 'Copy';
  btn2.textContent = 'Copy';
  btn.textContent = 'Copy';

});




copy4.addEventListener("click", function () {
  myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
  myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup) {
      myPopup.classList.remove("show");
  }
});

copy3.addEventListener("click", function () {
  myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
  myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup) {
      myPopup.classList.remove("show");
  }
});
copy2.addEventListener("click", function () {
  myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
  myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup) {
      myPopup.classList.remove("show");
  }
});

copy1.addEventListener("click", function () {
  myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
  myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
  if (event.target == myPopup) {
      myPopup.classList.remove("show");
  }
});

