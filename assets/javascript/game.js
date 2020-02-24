var charachters = {
  ["Obi-Wan-Kenobi"]: ["120", "Obi-Wan-Kenobi.jpg"],
  ["Luke-Skywalker"]: ["100", "Luke-Skywalker.jpg"],
  ["Darth-Sidious"]: ["150", "Darth-Sidious.jpg"],
  ["Darth-Maul"]: ["180", "Darth-Maul.jpg"]
};
var Enemies = ["Enemy1", "Enemy2", "Enemy3"];
var Damage = {
  ["Obi-Wan-Kenobi"]: 8,
  ["Luke-Skywalker"]: 5,
  ["Darth-Sidious"]: 20,
  ["Darth-Maul"]: 25
};
var MyCharachter;
var MyScore;
var MyDefender = "";
var MyDamage = 0;
var MyDefenderId;
var NoEnemy = true;
var NoOfDefeatedEnemies;
$(document).ready(function() {
  $(".GameOver").hide();
  $(".Winning").hide();
  $(".charachter").click(function() {
    NoOfDefeatedEnemies = 0;
    var id = this.id;
    MyCharachter = id;
    MyScore = parseInt(charachters[id][0]);
    MyDamage = Damage[id];
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
        $("#" + Enemies[count]).addClass("border-danger-min");
        count++;
      }
    }
  });
  $(".Enemies").click(function() {
    // check if charachter selected first
    if (MyCharachter !== undefined && NoEnemy) {
      NoEnemy = false;
      $("#YourStatus").text("");
      $("#DefenderStatus").text("");
      $("#" + MyDefenderId)
        .parent()
        .removeClass("borderleft-min order-1");
      $("#" + MyDefenderId).remove();
      MyDefenderId = this.id;
      var val =
        '<div class="col-md-6" style="color:white; font-size: 2rem">Enemies</div><div class="col-md-3 borderleft-min" style="color:white; font-size: 2rem">Defender</div><div class="col-md-3" style="color:white; font-size: 2rem">Fight Session</div>';
      $(".header-row").text("");
      $(".header-row").append(val);
      $("#" + MyDefenderId).removeClass("border-danger-min");
      $("#" + MyDefenderId).css("background", "black");
      $("#" + MyDefenderId).css("color", "white");
      $("#" + MyDefenderId)
        .parent()
        .addClass("borderleft-min");
      $("#" + MyDefenderId)
        .parent()
        .addClass("order-1");
      $(".attack").removeClass("borderleft-min");
      $(".attack").addClass("order-2");
      MyDefender = $("#" + MyDefenderId)
        .children(".card-header")
        .text();
      DefenderScore = parseInt(
        $("#" + MyDefenderId)
          .children(".card-body")
          .text()
      );
    } else {
      if (MyCharachter === undefined) {
        alert("Please select your charachter first!");
      } else {
        alert("Defender is already selected!");
      }
    }
  });
  $("#attack-btn").click(function() {
    if (MyCharachter !== undefined) {
      if (!NoEnemy) {
        MyScore = MyScore - Damage[MyDefender];
        $("#" + MyCharachter)
          .children(".card-body")
          .text(MyScore);
        DefenderScore = DefenderScore - MyDamage;
        $("#" + MyDefenderId)
          .children(".card-body")
          .text(DefenderScore);
        $("#YourStatus").text(
          "You Attacked " + MyDefender + " For " + MyDamage + " Damage"
        );
        $("#DefenderStatus").text(
          MyDefender +
            " Attached You Back For " +
            Damage[MyDefender] +
            " Damage"
        );
        MyDamage = MyDamage + Damage[MyCharachter];
        if (MyScore <= 0) {
          setTimeout(function() {
            $(".Game").hide();
            $(".GameOver").show();
          }, 1000);
        }
        if (DefenderScore <= 0) {
          NoOfDefeatedEnemies++;
          NoEnemy = true;
          $("#YourStatus").text(
            "You Have Defeated " +
              MyDefender +
              ", You Can Choose To Fight Another Enemy"
          );
          $("#DefenderStatus").text("");
          setTimeout(function() {
            $("#" + MyDefenderId).hide();
          }, 300);
          if (NoOfDefeatedEnemies == 3) {
            $(".Enemies-row").remove();
            $(".header-row").remove();
            $(".Winning").show();
          }
        }
      } else {
        $("#YourStatus").text("No Enemy Here!");
      }
    } else {
      alert("Please select your charachter first!");
    }
  });
  $("#PlayAgain-btn").click(function() {
    location.reload(true);
  });
  $("#PlayAgain-btn1").click(function() {
    location.reload(true);
  });
});
