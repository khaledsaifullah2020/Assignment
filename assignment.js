// number 1
var Meter = 1000;
function kilometerToMeter(num) {
  var kilometer = Meter * num;
  return kilometer;
}

var result = kilometerToMeter(100);
console.log(result);

// number 2

function budgetCalculator(num1, num2, num3) {
  var ghori = 50 * num1;
  var phone = 100 * num2;
  var laptop = 500 * num3;
  var budged = ghori + phone + laptop;
  return budged;
}
var result = budgetCalculator(2, 1, 1);
console.log(result);

// number 3
function hotelCost(stay) {
  var stay = 25;
  var cost = 0;
  if (stay <= 10) {
    cost = stay * 100;
  } else if (stay <= 20) {
    var firstPart = 10 * 100;
    var remaining = stay - 10;
    var secondPart = remaining * 80;
    cost = firstPart + secondPart;
  } else {
    var firstPart = 10 * 100;
    var secondPart = 10 * 80;
    var remaining = stay - 20;
    var thirdPart = remaining * 50;
    cost = firstPart + secondPart + thirdPart;
  }
  return cost;
}
var count = hotelCost(25);
console.log(count);

// number 4

function megaFriend(name) {
  var longName = "rob";

  for (var i = 0; i < name.length; i++) {
    var element = name[i];
    if (element.length > longName.length) {
      longName = element;
    }
  }
  return longName;
}
var name = [
  "Rabbi",
  "sultan",
  "sultana",
  "rishi",
  "rob",
  "rokibuzZaman",
  "Nila",
];

var result = megaFriend(name);
console.log("Biggest Name is =", result);
