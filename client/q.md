Shopping Cart

You own a grocery store and here is your current inventory:

const inventory = [
{ name: 'bacon', unitPrice: 10.99, quantity: 10},
{ name: 'eggs', unitPrice: 3.99, quantity: 10},
{ name: 'cheese', unitPrice: 6.99, quantity: 10},
{ name: 'chives', unitPrice: 1.00, quantity: 10},
{ name: 'wine', unitPrice: 11.99, quantity: 10},
{ name: 'brandy', unitPrice: 17.55, quantity: 10},
{ name: 'bananas', unitPrice: 0.69, quantity: 10},
{ name: 'ham', unitPrice: 2.69, quantity: 10},
{ name: 'tomatoes', unitPrice: 3.26, quantity: 10},
{ name: 'tissue', unitPrice: 8.45, quantity: 10},
];

Your goal as the new technical lead is to do the following:

Create an application where the user can see a menu of the available inventory -- done
Allow the user to select the items he wants to purchase into a shopping cart --- done
Allow the user to update the number of items in the shopping cart -->
Allow the user to delete items from the shopping cart --- done

METHOD : GET
Fetch all the products /api/products

METHOD: POST
createOrder /api/products

METHOD: PATCH
update /api/products

METHOD: DELETE
delete ordered item /api/product
