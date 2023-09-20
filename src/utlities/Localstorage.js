const getStoredCart = () => {
    const checkcart = localStorage.getItem('cart');
    if (checkcart) {
        return JSON.parse(checkcart);
    } else {
        return [];
    }
}
const savecart = cart => {
    const cartStringyfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringyfied);
}

const adItemToLS = (id) => {
    const cart = getStoredCart();
    cart.push(id);
    savecart(cart);
}
export {adItemToLS}