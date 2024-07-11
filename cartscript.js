const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}




let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
    // Check if the product is already in cart
    let found = cartItems.find(item => item.name === productName);
    if (found) {
        found.quantity++;
    } else {
        cartItems.push({ name: productName, price: price, quantity: 1 });
    }
    cartTotal += price;
    updateCartDisplay();
}

function updateCartDisplay() {
    let cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cartItems.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <span>${item.name}</span>
            <span>&#8377; ${item.price} x ${item.quantity}</span>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });
    document.getElementById('cart-total').textContent = cartTotal.toLocaleString(); // Display total with commas for thousands separator
}

function checkout() {
    if (cartItems.length === 0) {
        alert('Your cart is empty. Add some items first!');
    } else {
        let formattedTotal = cartTotal.toLocaleString(); // Format total with commas
        alert(`Checkout - Total amount: &#8377; ${formattedTotal}`);
        cartItems = [];
        cartTotal = 0;
        updateCartDisplay();
    }
}




