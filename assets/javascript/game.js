$(document).ready(function() {
  var charachters = {
    ["Obi-Wan-Kenobi"]: ["120", "Obi-Wan-Kenobi.jpg"],
    ["Luke-Skywalker"]: ["100", "Luke-Skywalker.jpg"],
    ["Darth-Sidious"]: ["150", "Darth-Sidious.jpg"],
    ["Darth-Maul"]: ["180", "Darth-Maul.jpg"]
  };
  var Enemies = ["Enemy1", "Enemy2", "Enemy3"];
  $(".charachter").click(function() {
    var id = this.id;
    $(".charachter-picked").text("");
    var val =
      '<div class="col-md-3 col-centered"><div class="card charachter border-success-min" id="' +
      id +
      '"><div class="card-header">' +
      id +
      '</div><img class="img-fluid" src="assets/images/' +
      id +
      '.jpg" /><div class="card-body">' +
      charachters[id][0] +
      "</div></div></div>";
    $(".charachter-picked").append(val);
    var count = 0;
    for (var enemy in charachters) {
      if (enemy !== id) {
        $("#" + Enemies[count])
          .children(".card-header")
          .text(enemy);
        $("#" + Enemies[count])
          .children("img")
          .attr("src", "assets/images/" + charachters[enemy][1]);
        $("#" + Enemies[count])
          .children(".card-body")
          .text(charachters[enemy][0]);
        $("#" + Enemies[count]).addClass("border-danger-min ");
        count++;
      }
    }
  });
});
