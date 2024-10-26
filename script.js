<<<<<<< HEAD
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
}

document.querySelector('#cart-btn').onclick = () =>{
    navbar.classList.remove('active')
    searchBar.classList.remove('active')
    cartItem.classList.toggle('active')
}

window.onscroll=() =>{
    navbar.classList.remove('active')
    searchBar.classList.remove('active')
    cartItem.classList.remove('active')
}
=======
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
}

document.querySelector('#cart-btn').onclick = () =>{
    navbar.classList.remove('active')
    searchBar.classList.remove('active')
    cartItem.classList.toggle('active')
}

window.onscroll=() =>{
    navbar.classList.remove('active')
    searchBar.classList.remove('active')
    cartItem.classList.remove('active')
}
>>>>>>> 57b98f76e205ee1487f92cafa1dbb4297b0e3bbc
