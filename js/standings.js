$('.expand-button').click(function() {
  $(this).parent().toggleClass('open');
  if ($(this).parent().hasClass('open')){
    $(this).html('Minder');
  } else { $(this).html('Meer'); }
});
