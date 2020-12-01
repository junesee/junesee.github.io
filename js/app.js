
$(document).ready(function(){
  $("#living-window").click(function(){
   // alert("hello");
    $("#living-window-off").hide();
    $("#living-window-on").show();
    $("#living-fan-off").show();
    $("#living-fan-on").hide();
    $("#living-ac-off").show();
    $("#living-ac-on").hide();
  });
});
