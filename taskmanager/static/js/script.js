$(function () {
  // sidenav initialization
  $('.sidenav').sidenav();

  // modal initialization
  $('.modal').modal();

  // datepicker initialization
  $('.datepicker').datepicker({
    format: "dd mmm, yyyy"
  });
  

  // select initialization
  $('select').formSelect();

  // collapsible initialization
  $('.collapsible').collapsible();
});