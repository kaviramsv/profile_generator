const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)", (name) => {
  
rl.question("What's an activity you like doing?", (activity) => {
  
     rl.question("What's your fav food", (food) => {
    
       rl.question("What's your fav color)", (color) => {
    
       rl.question("Whhich is your fav place", (place) => {
         
          console.log(` Your name is ${name}fav activity is ${activity} and 
          u love to eat ${food}.You love ${color} color.You think ${place} is a good place to hang out`);

          rl.close();
})})})})});
