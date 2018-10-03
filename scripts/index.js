'use strict';
/* global shoppingList, store, api, Item */
/*eslint-env jquery*/

$(document).ready(function() {
  shoppingList.bindEventListeners();
  api.getItems((items)=> {
    
    //console.log('hello there');
    items.forEach((item) => store.addItem(item));
    shoppingList.render();

    const item = store.items[0];
    console.log('current name: ' + item.name);
    store.findAndUpdate(item.id, { name: 'foobar' });
    console.log('new name: ' + item.name);


 
  });
});




/* api.getItems((items) => {
  const item = items[0];
  api.updateItem(item.id, { name: 'foobar'}, () => {
    console.log('updated!');
  });
});

api.createItem('bear', (newItem) => {
  console.log(newItem);
  //api.getItems((items) => {
  // console.log(items);
  //});
});
*/
