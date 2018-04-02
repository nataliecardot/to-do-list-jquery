$(function() {
  $('.button').click(function() {
    let toAdd = $('input[name=checkListItem]').val();
    // Inserts specified element as first child (div with class .item) of target element (class .list)
    $('.list').prepend('<div class="item">' + toAdd + '</div>');
    // Clears input box after clicking 'Add'
    $('input[name=checkListItem]').val('');
  });

  // Prevents page from refreshing and event bubbling and capturing/trickling upon hitting enter
  $('input[name=checkListItem]').keypress(function(e) {
    if (e.which == 13) {
      $('.button').click();
      // e.preventDefault() would prevent default event from occuring, e.stopPropagation() would prevent event from bubbling up--return false does both
      return false;
    }
  });

  // Removes to-do list item (to be exact, from entire HTML document object) along with bound events and jQuery data upon click
  $(document).on('click', '.item', function() {
    $(this).remove();
  });
});
