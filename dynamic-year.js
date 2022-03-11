// jquery "on ready" function
jQuery(document).ready(function( $ ) {
  // get new date
  const today = new Date();
  // extract just the year from the date
  const year = today.getFullYear();
  // find our selector, and inject the year
  // the copyright year will automatically stay updated
  $('#copyrightYear').html(year);
});
