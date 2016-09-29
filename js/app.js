document.addEventListener('DOMContentLoaded', function() {
  console.log('this is after the dom loaded');

<<<<<<< HEAD
  var $listForm = document.querySelector('.list-maker-form');
=======
  // var $listForm = document.querySelector('.list-maker-form');

  // jquery

  // show border when hovering over individual columns
  var $columns = $('.columns');
  $columns.hover(function() {
    $(this).css('border', '2px solid black');
  }, function() {
    $(this).css('border', 'none');
  });

  
>>>>>>> 12a84957bf193d7b7a249cc7fc6bfa25fb5cc5f2

});

console.log('this is before the dom loaded');
