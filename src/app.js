/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function randomNumber(length) {
    return Math.floor(Math.random() * length);
  }
  let sentence = "";
  sentence += who[randomNumber(who.length)];
  sentence += " ";
  sentence += action[randomNumber(action.length)];
  sentence += " ";
  sentence += what[randomNumber(what.length)];
  sentence += " ";
  sentence += when[randomNumber(when.length)];
  sentence += ".";
  document.getElementById("idExcuse").textContent = sentence;
  console.log(sentence);
};
