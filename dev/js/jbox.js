new jBox('Tooltip', {
  attach: '#tooltip',
  theme: 'TooltipDark',
  trigger: 'mouseenter',
  responsiveWidth: 'boolean',
  height: 50


});

new jBox('Modal', {
  width: 30,
  height: 10,
  attach: '#modal',
  title: 'My Modal Window',
  content: '<i>Hello there!</i>'
});

new jBox('Notice', {
attach: '#notice',
  content: 'Hurray! A notice!',
  color: 'blue'
});

new jBox('Confirm', {
  confirmButton: 'Do it!',
  cancelButton: 'Nope'
});
