'use strict';
/* global shoppingList, store, api, Item */
/*eslint-env jquery*/

$(document).ready(function() {
  shoppingList.bindEventListeners();
  api.getItems((items)=> {
    console.log('hello there');
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });
});

// api.createItem('bear', (newItem) => {
//   console.log(newItem);
//   //api.getItems((items) => {
//    // console.log(items);
//   //});
// });