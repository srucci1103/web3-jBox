
$('#tooltip').jBox('Tooltip', {
    theme: 'TooltipDark',
    trigger: 'mouseenter',
    height: 50
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
});}

$('#confirm').jBox('Confirm', {
    confirmButton: 'Yes I did!',
    cancelButton: 'Please close this.'
});

$('#downloadbutton').jBox('Mouse', {
    trigger: 'mouseenter',
    content: 'I will take you to GitHub!'
 });
