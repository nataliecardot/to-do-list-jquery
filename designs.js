$(function() {

  $('.button').click(function() {
    let toAdd = $('input[name=listItem]').val();
    // Inserts specified element as first child (div with class .item) of target element (class .list)
    $('ul').prepend('<li>' + toAdd + '</li>');
    // Clears input box after clicking '+'
    $('input[name=listItem]').val('');
  });

  // Upon hitting enter, triggers button click and prevents page from refreshing and event bubbling and capturing/trickling
  $('input[name=listItem]').keypress(function(e) {
    if (e.which == 13) {
      $('.button').click();
      // e.preventDefault() would prevent default event from occuring, e.stopPropagation() would prevent event from bubbling up--return false does both
      return false;
    }
  });

  $('ul').on('click', 'li', function() {
    $(this).toggleClass('strike').fadeOut('slow');
  });

});
