import {mountProducts} from 'products/ProductsIndex'
// you can also rename the mounts here if you do not want use different names inside their own modules
import {mountCart} from 'cart/CartShow';
console.log("container")

// if you use the name of the cart or products as id, it errors with 
// Uncaught (in promise) TypeError: __webpack_modules__[moduleId] is not a function
// So use seperated IDS

// When you define an ID, js creates a global variable with the same name. So if you try to use the module names as id, you will get the fn is not a function error.
mountProducts(document.querySelector("#products-prod"));
mountCart(document.querySelector("#cart-prod"));