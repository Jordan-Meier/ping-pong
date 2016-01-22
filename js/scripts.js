//BDD Business Logic:

var pingPong = function (number) {
  if (number % 15 === 0) {
    return "pingpong";
  }
  else if (number % 5 === 0) {
    return "pong";
  }
  else if (number % 3 === 0) {
    return "ping";
  }
  else {
    return number;
  }
}

//BDD User Interface Logic:

$(document).ready(function() {
  $("form#letsPingPong").submit(function(event) {
    var number = $("input#number")).val();
        number = parseInt(number);
    for (var i = 1; i <= number; i +=1) {
      var result = pingPong (i);

    }    





    event.preventDefault();
  });

});
