let navbar =  document.querySelector('.navbar');
let searchBar =  document.querySelector('.search-form');
let cartItem =  document.querySelector('.cart-items-container');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
    searchBar.classList.remove('active')
    cartItem.classList.remove('active')
}

document.querySelector('#search-btn').onclick = () =>{
    navbar.classList.remove('active')
    searchBar.classList.toggle('active')
    cartItem.classList.remove('active')
    window.location.hash = "#products";
}

document.querySelector('#cart-btn').onclick = () =>{
    navbar.classList.remove('active')
    searchBar.classList.remove('active')
    cartItem.classList.toggle('active')
}

window.onscroll=() =>{
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
}

// document.querySelector(".search-form").addEventListener("click", function () {
//     window.location.hash = "#products";
// }
// )

document.getElementById("search-box").addEventListener("input", function () {

    let searchValue = this.value.toLowerCase();
    let productItems = document.querySelectorAll(".products .box");
    let menuItems = document.querySelectorAll(".menu .box");

    function filterItems(items) {
        items.forEach(item => {
            let itemName = item.querySelector("h3").textContent.toLowerCase();
            if (itemName.includes(searchValue)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    filterItems(productItems);
    filterItems(menuItems);

    
    // if (searchValue.length > 0) {
    //     window.location.hash = "#products";
    // }
});

document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Retrieve stored cart data

    function updateCartDisplay() {
        let cartSection = document.getElementById("cart-section");
        if (cart.length > 0) {
            cartSection.style.display = "block";
        } else {
            cartSection.style.display = "none";
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function addToCart(event) {
        event.preventDefault();
        let productBox = event.target.closest(".box");
        let productName = productBox.querySelector("h3").textContent;
        let productPrice = productBox.querySelector(".price").textContent;
        let productImage = productBox.querySelector("img").src;

        let product = {
            name: productName,
            price: productPrice,
            image: productImage,
        };

        cart.push(product);
        updateCartDisplay();
        alert(productName + " has been added to your cart!");
    }

    // Attach event listeners to all "Add to Cart" buttons and cart icons
    document.querySelectorAll(".btn, .fa-shopping-cart").forEach(button => {
        button.addEventListener("click", addToCart);
    });

    // Checkout Button Click Event
    document.getElementById("checkout-btn").addEventListener("click", function () {
        window.location.href = "cart.html";
    });

    updateCartDisplay();
});