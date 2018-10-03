'use strict';
/* global shoppingList, store */
/*eslint-env jquery*/

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));

