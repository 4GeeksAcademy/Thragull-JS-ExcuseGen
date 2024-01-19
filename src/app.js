/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  function generateExcuse() {
    const sentence =
      who[getRandomIndex(who)] +
      " " +
      action[getRandomIndex(action)] +
      " " +
      what[getRandomIndex(what)] +
      " " +
      when[getRandomIndex(when)] +
      ".";
    return sentence;
  }

  document.getElementById("idExcuse").textContent = generateExcuse();
};
