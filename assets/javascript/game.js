$(document).ready(function() {
  var charachters = {
    ["Obi-Wan-Kenobi"]: ["120", "Obi-Wan-Kenobi.jpg"],
    ["Luke-Skywalker"]: ["100", "Luke-Skywalker.jpg"],
    ["Darth-Sidious"]: ["150", "Darth-Sidious.jpg"],
    ["Darth-Maul"]: ["180", "Darth-Maul.jpg"]
  };
  var Enemies = ["Enemy1", "Enemy2", "Enemy3"];
  var AvailableEnemies = [];
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
    AvailableEnemies = [];
    for (var enemy in charachters) {
      if (enemy !== id) {
        AvailableEnemies.push(enemy);
        $("#" + Enemies[count])
          .children(".card-header")
          .text(enemy);
        $("#" + Enemies[count])
          .children("img")
          .attr("src", "assets/images/" + charachters[enemy][1]);
        $("#" + Enemies[count])
          .children(".card-body")
          .text(charachters[enemy][0]);
        $("#" + Enemies[count]).addClass("border-danger-min");
        count++;
      }
    }
    console.log(AvailableEnemies);
  });
  $(".Enemies").click(function() {
    var id = this.id;
    var val =
      '<div class="col-md-6" style="color:white; font-size: 2rem">Enemies</div><div class="col-md-3 borderleft-min" style="color:white; font-size: 2rem">Defender</div><div class="col-md-3" style="color:white; font-size: 2rem">Fight Session</div>';
    $(".header-row").text("");
    $(".header-row").append(val);
    $("#" + id).removeClass("border-danger-min");
    $("#" + id).css("background", "black");
    $("#" + id).css("color", "white");
    $("#" + id)
      .parent()
      .addClass("borderleft-min");
    $("#" + id)
      .parent()
      .addClass("order-1");
    $(".attack").removeClass("borderleft-min");
    $(".attack").addClass("order-2");
  });
});
