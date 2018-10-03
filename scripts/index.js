'use strict';
/* global shoppingList, store, api, Item */
/*eslint-env jquery*/

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

api.createItem('bear', (newItem) => {
  console.log(newItem);
  api.getItems((items) => {
    console.log(items);
  });
});

console.log(api.BASE_URL);