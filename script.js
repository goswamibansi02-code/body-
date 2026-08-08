// MOBILE NAVBAR

function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("show");
}


// ORDER POPUP

function openOrder(coffeeName) {

    const orderBox = document.getElementById("orderBox");
    const selectedCoffee = document.getElementById("selectedCoffee");

    selectedCoffee.value = coffeeName;

    orderBox.classList.add("active");
}


function closeOrder() {
    document.getElementById("orderBox").classList.remove("active");
}


// PLACE ORDER

function placeOrder(event) {

    event.preventDefault();

    const coffee = document.getElementById("selectedCoffee").value;
    const name = document.getElementById("customerName").value;
    const quantity = document.getElementById("coffeeQuantity").value;

    alert(
        "Thank you, " + name + "!\n\n" +
        "Your order has been received.\n" +
        "Coffee: " + coffee + "\n" +
        "Quantity: " + quantity
    );

    event.target.reset();

    closeOrder();
}


// CONTACT FORM

function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("contactName").value;

    alert(
        "Thank you, " + name +
        "! Your message has been sent successfully."
    );

    event.target.reset();
}


// CLOSE POPUP WHEN CLICKING OUTSIDE

document.getElementById("orderBox").addEventListener("click", function(event) {

    if (event.target === this) {
        closeOrder();
    }

});