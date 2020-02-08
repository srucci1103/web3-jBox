
$('#tooltip').jBox('Tooltip', {
    theme: 'TooltipDark',
    trigger: 'mouseenter',
    responsiveWidth: 'boolean',
    height: 50
 });

 $('#downloadbutton').jBox('Mouse', {
     trigger: 'mouseenter',
     content: 'I will take you to GitHub!'
  });

 $('#modal').jBox('Modal', {
     color: 'black',
     title: 'This is a window.',
     content: '<i>This is a sentence!</i>'
});


function demoNotice() {
$('#notice').jBox('Notice', {
      trigger: 'click',
      content: 'Here is a notice!',
      color: 'black'
});
}

$('#confirm').jBox('Confirm', {
    confirmButton: 'Yes I did!',
    cancelButton: 'Please close this.'
});
