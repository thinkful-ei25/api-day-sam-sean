/* global $ */
'use strict';

const api = (function(){
  
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sean-sam';

  const getItems = function(callback){
    $.getJSON(`${BASE_URL}/items`, callback);
  };

  const createItem = function(name, callback){
    const newItem = JSON.stringify({name : name});
    $.ajax(
      {
        url : `${BASE_URL}/items`,
        method : 'POST', 
        dataType : 'json',
        contentType : 'application/json',
        data : newItem, 
        success : callback 
      }
    ); 
    // JSON.stringify(newItem);  
  }; 

  const deleteItem = function(id, callback){ 
    $.ajax(
      {
        url : `${BASE_URL}/items/${id}`,
        method : 'DELETE', 
        dataType : 'json',
        contentType : 'application/json',
        success : callback 
      }
    ); 

  }; 

  const updateItem = function(id, updateData, callback){
    updateData = JSON.stringify(updateData);
    $.ajax(
      {
        url : `${BASE_URL}/items/${id}`,
        method : 'PATCH', 
        dataType : 'json',
        contentType : 'application/json',
        data :  updateData,
        success : callback 
      }
    );
  };

  return {
    getItems, 
    createItem,
    updateItem, 
    deleteItem
  };
}());

