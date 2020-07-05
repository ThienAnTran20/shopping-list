
//function to add new item to list
function shoppingList() {
  
  
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    
    const listItem = $('.js-shopping-list-entry').val();
    
   // if listItem is not empty, add listItem to the list. 
   if (listItem !== "") {
      $('.shopping-list').append(`<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      `);
      $('.js-shopping-list-entry').val("");
  }
});

//add event listener on click to toggle checked/unchecked item
$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
  $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
});


//add item listener on click to remove item from list
$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  $(this).closest('li').remove();
});
}
 


//call function
$(shoppingList);

