var scenarioArray = [];
var day = 1;
var scenarionum = 0;
var inventory = ["Instant-Habitat", "Water-Reclamation Plant"];
var buildings = []
var alive = true;
var life = 100;
var food = 300;
var water = 200;
var iron_ore = 0;
var habitat = false;
var wplant = false;
var ghouse = false;
var rover = false;
var panels = false;
var fhabitats = false;

function initialize() {
  document.getElementById("b1").style.visibility = "hidden";
  document.getElementById("b2").style.visibility = "hidden";
  document.getElementById("b3").style.visibility = "hidden";
  document.getElementById("b4").style.visibility = "hidden";
  document.getElementById("b5").style.visibility = "hidden";
  document.getElementById("b7").style.visibility = "hidden";
  setScenarios();
}

var createScenario = function(
  question,
  option1,
  option2,
  option3,
  option4,
  answer,
  health,
  food,
  water,
  ore,
  reward
) {
  var scenario = new Object();
  scenario.question = question;
  scenario.option1 = option1;
  scenario.option2 = option2;
  scenario.option3 = option3;
  scenario.option4 = option4;
  scenario.answer = answer;
  scenario.health = health;
  scenario.food = food;
  scenario.water = water;
  scenario.ore = ore;
  scenario.reward = reward;
  return scenario;
};

function start() {
  alert(
    "You have landed on mars safely,and it is now your mission to survive and you have 30 days to prepare for the new colonists!"
  );
  runScenario(0);
  document.getElementById("b0").style.visibility = "hidden";
  document.getElementById("b7").style.visibility = "hidden";
}

function next() {
  if (alive == false) {
    document.getElementById("scenario").innerHTML = "GAME OVER";
    document.getElementById("option1").innerHTML = "GAME OVER";
    document.getElementById("option2").innerHTML = "GAME OVER";
    document.getElementById("option3").innerHTML = "GAME OVER";
    document.getElementById("option4").innerHTML = "GAME OVER";

    document.getElementById("b5").style.visibility = "visible";

    document.getElementById("b0").style.visibility = "hidden";
    document.getElementById("b1").style.visibility = "hidden";
    document.getElementById("b2").style.visibility = "hidden";
    document.getElementById("b3").style.visibility = "hidden";
    document.getElementById("b4").style.visibility = "hidden";
    document.getElementById("b7").style.visibility = "hidden";
  } else if (win == true) {
    document.getElementById("scenario").innerHTML = "GAME OVER";
    document.getElementById("option1").innerHTML = "GAME OVER";
    document.getElementById("option2").innerHTML = "GAME OVER";
    document.getElementById("option3").innerHTML = "GAME OVER";
    document.getElementById("option4").innerHTML = "GAME OVER";

    document.getElementById("b5").style.visibility = "visible";

    document.getElementById("b0").style.visibility = "hidden";
    document.getElementById("b1").style.visibility = "hidden";
    document.getElementById("b2").style.visibility = "hidden";
    document.getElementById("b3").style.visibility = "hidden";
    document.getElementById("b4").style.visibility = "hidden";
    document.getElementById("b7").style.visibility = "hidden";
  } else {
    scenarionum = Math.round(Math.random() * scenarioArray.length);
    day++;
    runScenario(scenarionum);
  }
}

function runScenario(a) {
  document.getElementById("scenario").innerHTML = scenarioArray[a].question;
  document.getElementById("option1").innerHTML =
    "Option 1: " + scenarioArray[a].option1;
  document.getElementById("option2").innerHTML =
    "Option 2: " + scenarioArray[a].option2;
  document.getElementById("option3").innerHTML =
    "Option 3: " + scenarioArray[a].option3;
  document.getElementById("option4").innerHTML =
    "Option 4: " + scenarioArray[a].option4;

  document.getElementById("b1").style.visibility = "visible";
  document.getElementById("b2").style.visibility = "visible";
  document.getElementById("b3").style.visibility = "visible";
  document.getElementById("b4").style.visibility = "visible";
  document.getElementById("b7").style.visibility = "hidden";
}

function setScenarios() {
  //0
  scenarioArray.push(
    createScenario(
      "It is a calm day, what do you do?",
      "Go and dance outside without a spacesuit",
      "Do Nothing",
      "Deploy Habitat",
      "Go to your rocket and fly back to Earth",
      3,
      25,
      -20,
      -10,
      0,
      " Habitat"
    )
  );
  //1
  scenarioArray.push(
    createScenario(
      "There is a storm!, you must figure out how to survive!",
      "Go to Ship/Base and stock supplies while you wait out the storm",
      "Go into the storm and collect resources",
      "Dance in the storm",
      "Go to your rocket and fly back to Earth",
      1,
      25,
      25,
      -10,
      0,
      ""
    )
  );
  //2
  scenarioArray.push(
    createScenario(
      "Your habitat is decompressing, what do you do?",
      "Find the problem and fix it",
      "Put on your spacesuit, then find the problem and fix it",
      "Do nothing",
      "Go to your rocket and fly back to Earth",
      2,
      25,
      -20,
      -10,
      0,
      ""
    )
  );
  //3
  scenarioArray.push(
    createScenario(
      "There is a storm!, you must figure out how to survive!",
      "Go to Ship/Base and stock supplies while you wait out the storm",
      "Go into the storm and collect resources",
      "Dance in the storm",
      "Go to your rocket and fly back to Earth",
      1,
      25,
      25,
      -10,
      0,
      ""
    )
  );
  //4
  scenarioArray.push(
    createScenario(
      "Your habitat is decompressing, what do you do?",
      "Find the problem and fix it",
      "Put on your spacesuit, then find the problem and fix it",
      "Do nothing",
      "Go to your rocket and fly back to Earth",
      2,
      25,
      -20,
      -10,
      0,
      ""
    )
  );
  //5
  scenarioArray.push(
    createScenario(
      "There is a storm!, you must figure out how to survive!",
      "Go to Ship/Base and stock supplies while you wait out the storm",
      "Go into the storm and collect resources",
      "Dance in the storm",
      "Go to your rocket and fly back to Earth",
      1,
      25,
      25,
      -10,
      0,
      ""
    )
  );
  //6
  scenarioArray.push(
    createScenario(
      "Your habitat is decompressing, what do you do?",
      "Find the problem and fix it",
      "Put on your spacesuit, then find the problem and fix it",
      "Do nothing",
      "Go to your rocket and fly back to Earth",
      2,
      25,
      -20,
      -10,
      0,
      ""
    )
  );
  //7
  scenarioArray.push(
    createScenario(
      "There is a storm!, you must figure out how to survive!",
      "Go to Ship/Base and stock supplies while you wait out the storm",
      "Go into the storm and collect resources",
      "Dance in the storm",
      "Go to your rocket and fly back to Earth",
      1,
      25,
      25,
      -10,
      0,
      ""
    )
  );
  //8
  scenarioArray.push(
    createScenario(
      "Your habitat is decompressing, what do you do?",
      "Find the problem and fix it",
      "Put on your spacesuit, then find the problem and fix it",
      "Do nothing",
      "Go to your rocket and fly back to Earth",
      2,
      25,
      -20,
      -10,
      0,
      ""
    )
  );
  //9
  scenarioArray.push(
    createScenario(
      "There is a storm!, you must figure out how to survive!",
      "Go to Ship/Base and stock supplies while you wait out the storm",
      "Go into the storm and collect resources",
      "Dance in the storm",
      "Go to your rocket and fly back to Earth",
      1,
      25,
      25,
      -10,
      0,
      ""
    )
  );
  //10
  scenarioArray.push(
    createScenario(
      "Your habitat is decompressing, what do you do?",
      "Find the problem and fix it",
      "Put on your spacesuit, then find the problem and fix it",
      "Do nothing",
      "Go to your rocket and fly back to Earth",
      2,
      25,
      -20,
      -10,
      0,
      ""
    )
  );
  //11
  scenarioArray.push(
    createScenario(
      "It is a calm day, what do you do?",
      "Go and dance outside without a spacesuit",
      "Do Nothing",
      "Construct Greenhouse",
      "Go to your rocket and fly back to Earth",
      3,
      25,
      50,
      -15,
      -30,
      " Greenhouse"
    )
  );
  //12
  scenarioArray.push(
    createScenario(
      "It is a calm day, what do you do?",
      "Go and dance outside without a spacesuit",
      "Do Nothing",
      "Construct Water-Reclamation Plant",
      "Go to your rocket and fly back to Earth",
      3,
      25,
      50,
      100,
      0,
      " Water-Reclamation Plant"
    )
  );
  //13
  scenarioArray.push(
    createScenario(
      "It is a calm day, what do you do?",
      "Go and dance outside without a spacesuit",
      "Do Nothing",
      "Deploy Solar Panels",
      "Go to your rocket and fly back to Earth",
      3,
      25,
      -20,
      -10,
      -10,
      " Solar Panels"
    )
  );
  //14
  scenarioArray.push(
    createScenario(
      "It is a calm day, what do you do?",
      "Go and dance outside without a spacesuit",
      "Do Nothing",
      "Build a Rover",
      "Go to your rocket and fly back to Earth",
      3,
      25,
      -20,
      -10,
      -50,
      " Rover"
    )
  );
  //15
  scenarioArray.push(
    createScenario(
      "It is a calm day, what do you do?",
      "Go and dance outside without a spacesuit",
      "Do Nothing",
      "Go collect resources",
      "Go to your rocket and fly back to Earth",
      3,
      25,
      -20,
      0,
      20,
      ""
    )
  );
  //16
  scenarioArray.push(
    createScenario(
      "It is a calm day, what do you do?",
      "Go and dance outside without a spacesuit",
      "Do Nothing",
      "Go collect resources",
      "Go to your rocket and fly back to Earth",
      3,
      25,
      -20,
      0,
      50,
      ""
    )
  );
  //17
  scenarioArray.push(
    createScenario(
      "It is a calm day, what do you do?",
      "Go and dance outside without a spacesuit",
      "Do Nothing",
      "Go collect resources",
      "Go to your rocket and fly back to Earth",
      3,
      25,
      -20,
      0,
      20,
      ""
    )
  );
  //18
  scenarioArray.push(
    createScenario(
      "It is a calm day, what do you do?",
      "Go and dance outside without a spacesuit",
      "Do Nothing",
      "Go collect resources",
      "Go to your rocket and fly back to Earth",
      3,
      25,
      -20,
      0,
      20,
      ""
    )
  );
  //19
  scenarioArray.push(
    createScenario(
      "It is a calm day, what do you do?",
      "Go and dance outside without a spacesuit",
      "Do Nothing",
      "Go collect resources",
      "Go to your rocket and fly back to Earth",
      3,
      25,
      -20,
      0,
      20,
      ""
    )
  );
  //20
  scenarioArray.push(
    createScenario(
      "It is a calm day, what do you do?",
      "Go and dance outside without a spacesuit",
      "Do Nothing",
      "Go collect resources",
      "Go to your rocket and fly back to Earth",
      3,
      25,
      -20,
      0,
      20,
      ""
    )
  );
  //21
  scenarioArray.push(
    createScenario(
      "It is a calm day, what do you do?",
      "Go and dance outside without a spacesuit",
      "Do Nothing",
      "Go collect resources",
      "Go to your rocket and fly back to Earth",
      3,
      25,
      -20,
      0,
      20,
      ""
    )
  );
  //22
  scenarioArray.push(
    createScenario(
      "It is a calm day, what do you do?",
      "Go and dance outside without a spacesuit",
      "Do Nothing",
      "Go collect resources",
      "Go to your rocket and fly back to Earth",
      3,
      25,
      -20,
      0,
      20,
      ""
    )
  );
  //23
  scenarioArray.push(
    createScenario(
      "Something is wrong with your spacesuit, what do you do?",
      "Find the problem and fix it",
      "Get into your habitat, then find the problem and fix it",
      "Do nothing",
      "Go to your rocket and fly back to Earth",
      2,
      -25,
      -30,
      -20,
      0,
      ""
    )
  );
  //24
  scenarioArray.push(
    createScenario(
      "It is a calm day, what do you do?",
      "Go and dance outside without a spacesuit",
      "Do Nothing",
      "Set up habitats for future colonists",
      "Go to your rocket and fly back to Earth",
      3,
      0,
      -20,
      0,
      -20,
      " Future Habitats"
    )
  );
  //25
}

function check(b) {
  document.getElementById("b1").style.visibility = "hidden";
  document.getElementById("b2").style.visibility = "hidden";
  document.getElementById("b3").style.visibility = "hidden";
  document.getElementById("b4").style.visibility = "hidden";
  document.getElementById("b7").style.visibility = "visible";
  if (b == 4) {
    alert("You saved yourself, but at what cost? Letting down Humanity, abandoning your mission?");
    alive = false;
  } else {
    if (b == scenarioArray[scenarionum].answer) {
      alert("Correct!");


      if (scenarionum == 0) {
        if (habitat == false){
          for (var i = 0; i < inventory.length; i++) {
            if (inventory[i] == "Instant-Habitat") {
              inventory.splice(i, 1);
              buildings.push(scenarioArray[scenarionum].reward);
              habitat = true
            }
          }
        } else {
          alert("You already have a habitat!")
        }
      }

      if (scenarionum == 12) {
        if (wplant == false){
          for (var i = 0; i < inventory.length; i++) {
            if (inventory[i] == "Water-Reclamation Plant") {
              inventory.splice(i, 1);
              buildings.push(scenarioArray[scenarionum].reward);
              wplant = true
            }
          }
        }
        else {
          alert("You already have a Water-Reclamation Plant!")
        }
      }

      if (scenarionum == 11) {
        if (ghouse == false){
          if (iron_ore + scenarioArray[scenarionum].ore > -1){
            buildings.push(scenarioArray[scenarionum].reward);
            ghouse = true
          } else {
            alert("You don't have enough ore, try again later");
          }
        } else {
          alert("You already have a greenhouse!")
        }
      }

      if (scenarionum == 13) {
        if (panels == false){
          if (iron_ore + scenarioArray[scenarionum].ore > -1){
            buildings.push(scenarioArray[scenarionum].reward);
            panels = true
          } else {
            alert("You don't have enough ore, try again later");
          }
        } else {
          alert("You already have solar panels!")
        }
      }

      if (scenarionum == 14) {
        if (rover == false){
          if (iron_ore + scenarioArray[scenarionum].ore > -1){
            buildings.push(scenarioArray[scenarionum].reward);
            rover = true
          } else {
            alert("You don't have enough ore, try again later");
          }
        } else {
          alert("You already have a rover!")
        }
      }

      if (scenarionum == 24) {
        if (fhabitats == false){
          if (iron_ore + scenarioArray[scenarionum].ore > -1){
            fhabitats = true
            buildings.push(scenarioArray[scenarionum].reward);
          } else {
            alert("You don't have enough ore, try again later");
          }
        } else {
          alert("You already set up extra habitats!")
        }
      }

      addToFields()
    } else {
      alert("OH-NO! YOU DIED!");
      alive = false;
    }
  }
  setfields()
}



function setfields() {
  document.getElementById("day").innerHTML =
    "Day: " + day;
  document.getElementById("inventory").innerHTML =
    "Inventory: " + inventory;
  document.getElementById("health").innerHTML =
    "Health: " + life + "%";
  document.getElementById("food").innerHTML =
    "Food: " + food;
  document.getElementById("water").innerHTML =
    "Water: " + water;
  document.getElementById("ore").innerHTML =
    "Ore: " + iron_ore;
  document.getElementById("buildings").innerHTML =
    "Buildings: " + buildings;
}


function addToFields() {
  if (life + scenarioArray[scenarionum].health > -1) {
    life += scenarioArray[scenarionum].health;
  } else {
    alert("OH-NO! YOU DIED!");
    alive = false;
  }

  if (food + scenarioArray[scenarionum].food > -1) {
    if (ghouse == true) {
      food += 20
    }
    food += scenarioArray[scenarionum].food;
  } else {
    alert("OH-NO! YOU DIED!");
    alive = false;
  }

  if (water + scenarioArray[scenarionum].water > -1) {
    if (wplant == true) {
      water += 10
    }
    water += scenarioArray[scenarionum].water;
  } else {
    alert("OH-NO! YOU DIED!");
    alive = false;
  }

  if (iron_ore + scenarioArray[scenarionum].ore > -1) {
    iron_ore += scenarioArray[scenarionum].ore;
  }

  if (day == 30 && alive == true){
    win = true
  }
}


function reset() {
  day = 1;
  scenarionum = 0;
  inventory = ["Instant-Habitat", "Water-Reclamation Plant"];
  buildings = []
  alive = true;
  life = 100;
  food = 300;
  water = 200;
  iron_ore = 0;
  habitat = false;
  wplant = false;
  ghouse = false;
  rover = false;
  panels = false;
  fhabitats = false;

  setfields()
  
  alert(
    "You have landed on mars safely, and it is now your mission to survive and you have 30 days to prepare for the new colonists!"
  );
  runScenario(0);
  document.getElementById("b0").style.visibility = "hidden";
  document.getElementById("b7").style.visibility = "hidden";
}




