$(document).ready(function() {
  $(".charachter").click(function() {
    var id = this.id;
    var score;
    if (id === "Obi-Wan-Kenobi") {
      score = 120;
    } else if (id === "Luke-Skywalker") {
      score = 100;
    } else if (id === "Darth-Sidious") {
      score = 150;
    } else {
      score = 180;
    }
    $(".charachter-picked").text("");
    var val =
      '<div class="col-md-3"><div class="card charachter border-success-min" id="' +
      id +
      '"><div class="card-header">' +
      id +
      '</div><img class="img-fluid" src="assets/images/' +
      id +
      '.jpg" /><div class="card-body">' +
      score +
      "</div></div></div>";
    $(".charachter-picked").append(val);
  });
});
