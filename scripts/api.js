/* global $ */
'use strict';

const api = (function(){
  
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sean-sam';

  const getItems = function(){
    $.getJSON(`${BASE_URL}/items`, data => {
      // console.log(data);
    });
  };

  return {
    getItems
  };

}());

