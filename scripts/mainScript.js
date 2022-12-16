let basket = [  {id:'', quantity:1} ]
let current = 0;


function addToBasket(id,quantity){
    basket[current].id = id;
    basket[current++].quantity = quantity;
}