"use strict";
import state, {PAGES, cats} from "./data"
import render from "./render"

const rootEl = document.querySelector('#app');


export function getTotalPrice(){
    let totalPrice = 0;

    Object.entries(state.cart).map(item =>{
        totalPrice += (item[1].count * item[1].price);
    });

    totalPrice = totalPrice.toFixed(2);

    return totalPrice;

}


export function getTotalItems(){
    let sum = 0;
    Object.entries(state.cart).map(item =>{
        sum += item[1].count;
    });

    return sum;
}

function addItems(cats, rootEl){
    rootEl.addEventListener('click', (e) =>{
        if(e.target.classList.contains('add-cart')){
            const index = e.target.dataset.index;
            const product = cats[index];

            if(state.cart[product.name] === undefined){
                state.cart[product.name] = {count: 1, price: product.price, url: product.url};
            }else{
                state.cart[product.name].count++;
            }

            render(state, rootEl, cats);

            return;
        }
    });
    // cartItem: [0 : cat-name, 1: count, price, url]
}

function addCount(state, rootEl){
    rootEl.addEventListener('click', (e) =>{
        if(e.target.classList.contains('add-count')){
            const target = e.target.dataset.target;
            const inputCount = rootEl.querySelector(`[data-target="${target}"]`).value;
            state.cart[target].count = parseInt(inputCount);

            // delete this item
            if(state.cart[target].count === 0){
                const updatedCart = { ...state.cart };
                delete updatedCart[target];
                state.cart = updatedCart;
            }

            render(state, rootEl, cats);

            return;
        }
    });
}

function deleteItems(state, rootEl){
    rootEl.addEventListener('click', (e) =>{
        if(e.target.classList.contains('delete')){
            const index = e.target.dataset.index;
            const deleteItem = Object.keys(state.cart)[index];
            // update the cart
            const updatedCart = { ...state.cart };
            delete updatedCart[deleteItem];
            state.cart = updatedCart;

            render(state, rootEl, cats);

            return;
            
        }
    });
}

function checkoutItems(rootEl){
    rootEl.addEventListener('click', (e) =>{
        if(e.target.classList.contains('checkout-btn')){
               
            state.cart = [];
            state.showCart = !state.showCart;

            render(state, rootEl, cats);

            return;
        
        }
    });
}


function showCart(state, rootEl) {
    rootEl.addEventListener('click', (e) =>{
        if(e.target.classList.contains('toggle-cart')){
            state.showCart = !state.showCart;
    
            render(state, rootEl, cats);

            return;
        }
    });
}


showCart(state, rootEl);
addCount(state, rootEl);
checkoutItems(rootEl);
deleteItems(state, rootEl);
addItems(cats, rootEl);
render(state, rootEl, cats);
