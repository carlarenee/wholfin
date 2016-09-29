document.addEventListener('DOMContentLoaded', function() {
  console.log('this is after the dom loaded');


 // var $listForm = document.querySelector('.list-maker-form');

  // var $listForm = document.querySelector('.list-maker-form');

  // jquery

  // show border when hovering over individual columns
  var $columns = $('.columns');
  $columns.hover(function() {
    $(this).css('border', '4px solid blue');
    $('#p1').fadeIn();
  }, function() {
    $(this).css('border', 'none');
  });


  /// text display



});

console.log('this is before the dom loaded');
