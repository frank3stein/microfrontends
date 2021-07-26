import faker from 'faker'

const mountCart = (el) => {
    const cartText = `<div> You have ${faker.random.number()} items in your cart.</div>`
    console.log(cartText);
    el.innerHTML = cartText
}

if ( process.env.NODE_ENV === "development") {
    const el = document.getElementById('cart-dev')
    if (el) {
        mountCart(el)
    }
}

export { mountCart };