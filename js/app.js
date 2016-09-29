document.addEventListener('DOMContentLoaded', function() {
  console.log('this is after the dom loaded');

  // var $listForm = document.querySelector('.list-maker-form');

  // jquery

  // show border when hovering over individual columns
  var $columns = $('.columns');
  $columns.hover(function() {
    $(this).css('border', '2px solid black');
    $('#p1').fadeIn();
  }, function() {
    $(this).css('border', 'none');
  });


});

console.log('this is before the dom loaded');

$('.box').hide();
