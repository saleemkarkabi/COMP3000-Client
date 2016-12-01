$(document).ready(function(){
    $('#add').click(function(){
      window.location.replace('addpage.html');
    });

    $('#home').click(function(){
      window.location.replace('index.html');
    });

    $( '#addcontainer' ).submit(function( event ) {
      window.location.replace('index.html');
      event.preventDefault();
    });

  var containerHTML = '<div id = "item">\
                          <h4 id = "name">{{name}}</h4>\
                          <h6 id = "containerID">{{containerID}}</h6>\
                      </div>'

  $.getJSON( "192.168.2.16:3000/containers", function( data ) {
    for (container in data){
      var itemHTML = containerHTML
      itemHTML.replace(/{{name}}/g, container["name"])
      itemHTML.replace(/{{containerID}}/g, container["name"])
      $("#listContainer").append(itemHTML)
    }
  })

});
