$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var input = Number($("#input").val());
    var array = [];
    for (var i=0; i<=Number(input); i++) {
      array.push(i);
    }
    $('#output1').text(array);
    for (var i = 0; i < array.length; i++) {
      if (array[i] % 3 === 0) {
        array[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
      }
      else if (String(array[i]).includes("1")) {
        array[i] = "boop";
      }
      else if (String(array[i]).includes("0")) {
        array[i] = "beep";
      }
    }
    $("#output2").text(array);
  });
});
