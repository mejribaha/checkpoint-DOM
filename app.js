let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let p = document.getElementById("int");
let c = document.getElementById("cd");
let c1 = document.getElementById("cd1");
let c2 = document.getElementById("cd2");
let svg = document.getElementById("svg1");
let svg1 = document.getElementById("svg2");
let svg2 = document.getElementById("svg-3");
let btn4 = document.getElementById("aj");
let btn5 = document.getElementById("sup");
let btn6 = document.getElementById("aj1");
let btn7 = document.getElementById("sup1");
let clickCount = 0;
let myButton = document.getElementById("myButton");
let counter = 0;
let counter1 = 0;
let counter2 = 0;
let counterDisplay = document.getElementById("counterDisplay");
let counterDisplay1 = document.getElementById("counterDisplay1");
let counterDisplay2 = document.getElementById("counterDisplay2");
let myButton1 = document.getElementById("myButton1");
let price = document.getElementById("price");
let totalePrice = 0;
let price1 = 2500;
let price2 = 1199;
let price3 = 500;

btn1.addEventListener("click", function () {
  p.removeChild(c);
  totalePrice = totalePrice - counterDisplay.textContent * price1;
  price.textContent = "TotalePrice = " + totalePrice + "$";
});

btn2.addEventListener("click", function () {
  p.removeChild(c1);
  totalePrice = totalePrice - counterDisplay1.textContent * price2;
  price.textContent = "TotalePrice = " + totalePrice + "$";
});

btn3.addEventListener("click", function () {
  p.removeChild(c2);
  totalePrice = totalePrice - counterDisplay2.textContent * price3;
  price.textContent = "TotalePrice = " + totalePrice + "$";
});

svg.addEventListener("click", function () {
  clickCount++;
  if (clickCount % 2 === 1) {
    svg.style.color = "red";
  } else {
    svg.style.color = "";
  }
});

svg1.addEventListener("click", function () {
  clickCount++;
  if (clickCount % 2 === 1) {
    svg1.style.color = "red";
  } else {
    svg1.style.color = "";
  }
});

svg2.addEventListener("click", function () {
  clickCount++;
  if (clickCount % 2 === 1) {
    svg2.style.color = "red";
  } else {
    svg2.style.color = "";
  }
});

myButton.addEventListener("click", function () {
  counter++;
  counterDisplay.textContent = counter;
  totalePrice = totalePrice + price1;
  price.textContent = "TotalePrice = " + totalePrice + "$";
});

myButton1.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
    counterDisplay.textContent = counter;
    totalePrice = totalePrice - price1;
    price.textContent = "TotalePrice = " + totalePrice + "$";
  }
});

btn4.addEventListener("click", function () {
  counter1++;
  counterDisplay1.textContent = counter1;
  totalePrice = totalePrice + price2;
  price.textContent = "TotalePrice = " + totalePrice + "$";
});

btn5.addEventListener("click", function () {
  if (counter1 > 0) {
    counter1--;
    counterDisplay1.textContent = counter1;
    totalePrice = totalePrice - price2;
    price.textContent = "TotalePrice = " + totalePrice + "$";
  }
});

btn6.addEventListener("click", function () {
  counter2++;
  counterDisplay2.textContent = counter2;
  totalePrice = totalePrice + price3;
  price.textContent = "TotalePrice = " + totalePrice + "$";
});

btn7.addEventListener("click", function () {
  if (counter2 > 0) {
    counter2--;
    counterDisplay2.textContent = counter2;
    totalePrice = totalePrice - price3;
    price.textContent = "TotalePrice = " + totalePrice + "$";
  }
});
