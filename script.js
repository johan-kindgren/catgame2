let cart = [];

function addToCart(artPieceName, price) {
    cart.push({ name: artPieceName, price: price });
    alert(artPieceName + " har lagts till i kundvagnen!");
    updateCart();  // Spara kundvagnen i localStorage
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        // Uppdatera kundvagnen när sidan laddas
        displayCart();
    }
}

function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - ${item.price} SEK`;
        cartItemsContainer.appendChild(itemDiv);
        totalPrice += item.price;
    });

    totalPriceContainer.textContent = `Totalt pris: ${totalPrice} SEK`;
}

function checkout() {
    // Skicka kundvagnen till en kassasida eller behandla den på annat sätt
    alert('Din kundvagn är klar för betalning!');
}

function clearCart() {
    cart = []; // Töm kundvagnen
    updateCart(); // Uppdatera localStorage
    displayCart(); // Uppdatera gränssnittet
}

document.addEventListener('DOMContentLoaded', loadCart);
