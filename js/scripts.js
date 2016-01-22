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
    var number = $("input#number").val();
        number = parseInt(number);
//need something to clear out previous results when user
//resubmits a new number
    for (var i = 1; i <= number; i +=1) {
      var result = pingPong (i);
//add numbers as unordered list items to results section
//of index.html. append won't work, need a dif function.
        $("<li>" + result + "</li>").append($("#results"));
    }
    event.preventDefault();
  });

});
