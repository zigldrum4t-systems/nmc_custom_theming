
if (jQuery('#redirect-link a').length > 0) {
  jQuery('#picker-window').hide();
  window.location = jQuery('#redirect-link a').attr('href');
}

console.log('autoflowlogin js loadded');
