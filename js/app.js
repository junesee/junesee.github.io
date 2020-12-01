
$(document).ready(function(){
  $("#living-window-off").click(function(){
    $.ajax({
        url: 'https://ditto-poc.bosch-ops.com/api/2/things/com.lab.iot:green_house/inbox/messages/green_house?timeout=0',
        type: 'post',
        data: "{ \"category\": \"window\", \"payload\": \"open\" }",
        headers: {
            "Authorization": "Basic dHh5YW5nOm5lbW8wODI5",
            "Content-Type" : "application/json"
        },   
        dataType: 'json',
        contentType: "application/json",
        success: function (data) { console.info(data);    }    
    });
    /*
    $.ajax({
      url: 'https://api.ipify.org',
      type: 'get',
      success: function (data) { console.info("-erle- : " + data);    }    
    });
    */
    $("#living-window-off").hide();
    $("#living-window-on").show();
    //$("#living-window-off-icon").toggle();
    //$("#living-window-on-icon").toggle();
    $("#living-fan-off").toggle();
    $("#living-fan-on").toggle();
    $("#living-fan-off-icon").toggle();
    $("#living-fan-on-icon").toggle();
    $("#living-ac-off").toggle();
    $("#living-ac-on").toggle();
    $("#living-ac-off-icon").toggle();
    $("#living-ac-on-icon").toggle();
  });
  $("#living-window-on").click(function(){
    $.ajax({
        url: 'https://ditto-poc.bosch-ops.com/api/2/things/com.lab.iot:green_house/inbox/messages/green_house?timeout=0',
        type: 'post',
        data: "{ \"category\": \"window\", \"payload\": \"close\" }",
        headers: {
            "Authorization": "Basic dHh5YW5nOm5lbW8wODI5",
            "Content-Type" : "application/json"
        },   
        dataType: 'json',
        contentType: "application/json",
        success: function (data) { console.info(data);    }    
    });
    $("#living-window-off").show();
    $("#living-window-on").hide();
    $("#living-fan-off").toggle();
    $("#living-fan-on").toggle();
    $("#living-fan-off-icon").toggle();
    $("#living-fan-on-icon").toggle();
    $("#living-ac-off").toggle();
    $("#living-ac-on").toggle();
    $("#living-ac-off-icon").toggle();
    $("#living-ac-on-icon").toggle();
  });
});
