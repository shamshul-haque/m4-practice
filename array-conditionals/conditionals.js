// simple condition
var iphonePrice = 80000;
var myBudget = 50000;
if (iphonePrice <= myBudget) {
  console.log("I will buy the iphone 14s");
} else {
  console.log("I will buy the redme node 9s");
}

//multiple condition
var isGraduated = true;
var salary = 100000;
//all condition should be true
if (isGraduated == true && salary > 200000) {
  console.log("Will engaged");
} else {
  console.log("Will breakup");
}
//any one condition have to be true
if (isGraduated == true || salary > 200000) {
  console.log("Will engaged");
} else {
  console.log("Will breakup");
}

//multi stage condition
var myMoney = 40;
var danishPrice = 45;
var butterPrice = 35;
if (danishPrice < myMoney) {
  console.log("Give me the danish");
} else if (myMoney > butterPrice) {
  console.log("Give me the butter");
} else {
  console.log("Nothing need");
}

//nested condition
var math = true;
var geometry = false;
var english = true;
if (math == false) {
  if (geometry == true) {
    console.log("You will get the job");
  } else {
    console.log("You will not get the job");
  }
} else {
  if (english == true) {
    console.log("You are appointed");
  } else {
    console.log("You are rejected");
  }
}
