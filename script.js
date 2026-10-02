function addToCart(productName) {
  alert(productName + " has been added to your cart!");
}

function subscribe(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  document.getElementById("message").textContent =
    "Thanks! " + email + " has been added to our mailing list.";
}
