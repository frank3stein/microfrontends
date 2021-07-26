import faker from 'faker'

const mountProducts = (el) => {
    let products = ''

    for (let i=0; i <3; i++){
        const name = faker.commerce.productName()
        products += `<div>${name}</div>`
    }

    console.log(products)

    el.innerHTML = products;   
}


// we make sure for development, we use the index file of products, we target the id of the index file of products.
if (process.env.NODE_ENV === 'development'){
    const el = document.querySelector("#dev-products")

    if (el) {
        mountProducts(el);
    }
}

export {mountProducts}; 