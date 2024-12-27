/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = [
  "the",
  "our",
  "my",
  "your",
  "their",
  "his",
  "her",
  "its",
  "a",
  "that"
];
let adj = [
  "great",
  "big",
  "small",
  "fast",
  "cool",
  "brave",
  "funny",
  "smart",
  "strong",
  "happy"
];
let noun = [
  "jogger",
  "racoon",
  "developer",
  "artist",
  "wizard",
  "dancer",
  "singer",
  "writer",
  "gamer",
  "builder"
];

window.onload = function() {
  let finalString = "";

  for (let i of pronoun) {
    for (let j of adj) {
      for (let k of noun) {
        finalString += `${i}${j}${k}.com<br>`;
      }
    }
  }

  document.getElementById("result").innerHTML = finalString;
};
