export const cats= [
    {
        name: 'Fluffball',
        url: 'http://placekitten.com/150/150?image=1',
        price: 0.99
    },
    {
        name: 'General Mayhem',
        url: 'http://placekitten.com/150/150?image=2',
        price: 3.14,
    },
    {
        name: 'Whisker',
        url: 'http://placekitten.com/150/150?image=3',
        price: 2.73
    }
];


export const PAGES = {
    PRODUCT : 'products'
};

const state = {
    cart : [],
    page : PAGES.PRODUCT,
    cartShow: false,
    hideCartShow : false,
    viewCartShow : true,
    showCheckoutCart : true 
};

export default state;