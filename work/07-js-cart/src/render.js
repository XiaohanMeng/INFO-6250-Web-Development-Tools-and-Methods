import {getTotalPrice, getTotalItems} from "./script";
import {PAGES} from "./data"

function render(state, rootEl, cats){

    if(state.page == PAGES.PRODUCT){
        renderCats(state, rootEl, cats);
    }

}

function renderCats(state, rootEl, cats){
    console.log(cats);
    const productItems = cats.map((item, index) =>{
        return `<li class="cat-item">
            <div class="cat-card">
                <img src=${item.url}>
                <form action="" class="add-product">
                    <div class="cat-info">        
                        <span class="cat-name" data-index=${index}>${item.name}</span>
                        <span class="cat-price" data-price=${index}>$${item.price}</span>
                    </div>
                    <button class="add-cart" data-index=${index} type="submit">Add To Cart</button>
                </form>
                </div>
            </li>`;
    }).join('');

    const checkoutItems = Object.entries(state.cart).map( (item, index) => {
        return `<li class="cart-item">
                <img src=${item[1].url}>
                <span class="item-name">${item[0]}</span>
                <input type="number" min="0" class="add-count" data-index=${index} data-target="${item[0]}" value="${item[1].count}">
                <button type="button" class="delete" data-index="${index}">X</button>
        </li>`
    }).join('');

    const totalPrice = getTotalPrice();
    const totalItems = getTotalItems();

    let buttonType = "";
    let message = "";
    if(totalItems > 0){
        message = `Total price : ${totalPrice}`;
    }else{
        message = "Please add your items"
        buttonType = `hidden`;
    }

    let type = state.showCart === true ? "" : `hidden`;

    let cartMessage = "";
    if(totalItems === 0){
        cartMessage = state.showCart === true ? `Hide Cart` : `View Cart`;
    }else{
        cartMessage = state.showCart === true ? `Hide Cart` : `View Cart (${totalItems})`;
    }


    rootEl.innerHTML = `
        <h1>Kitten Shop</h1>
        <nav class="menu">
            <button class="toggle-cart">${cartMessage}</button>
        </nav>
        <main class="shopping">
            <div class="products-area">
                <ul class="products">
                    ${productItems}
                </ul>
            </div>
            <div class="checkout-area ${type}">
                <ul class="checkout-items">
                    ${checkoutItems}
                </ul>
                <div class="checkout-info">
                    <span class="message">${message}</span>
                    <button class="checkout-btn ${buttonType}" data-target="checkout">Checkout</buttton>
                </div>
            </div>    
        </main>
`;
}

export default render;
