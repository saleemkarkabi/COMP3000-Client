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
                          <h4 id = "name">__name__</h4>\
                          <h6 id = "containerID">__containerID__</h6>\
                      </div>'

  console.log(containerHTML)

  $.getJSON("http://localhost:3000/containers", function(data) {
    var containers = data['containers']

    for (var i = 0; i < containers.length; i++) {
      var container = containers[i]

      var itemHTML = containerHTML
      itemHTML = itemHTML.replace(/__name__/g, container["name"])
      itemHTML = itemHTML.replace(/__containerID__/g, container["id"])
      $("#listContainer").append(itemHTML)
    }
  })

});
