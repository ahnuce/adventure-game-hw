//Adventure Game Homework
prompt("HEY! Do you want to play a game......or nah? ");
alert("Im not giving you a choice because this is hw");
let hero = prompt("Your name is?:"," " );





if (hero === "hero"){
 hero = prompt("Please enter your name");
}
else {
 alert("IT DOESNT MATTER WHAT YOUR NAME IS! Im calling you the hero because I stole your princess");
}

//switch statement


let hero1 = prompt("Have you killed someone?", "yes or no");

if (hero1 === "yes"){
  console.log("Sometimes heroes have to kill. Or they don't? Idk I'm not a hero.");
  alert("Sometimes heroes have to kill. Or they don't? Idk I'm not a hero.");

}
else if(hero1 === "no"){
  alert("You're a hero foreal but you're probably going to die against me");

}

let hero2 = prompt("How many years do you think it will take to level up to beat me before I GIT INIT with the princess?....get it?");

if (hero2 == 0){
  alert("You had no chance from the very beginning and the princess came here on her own");
}
else if(hero2 !== 0){
  alert("You might have a chance if you multiply that by 1,000,000,000 then you can save her");
}

// for (i = 0, len = cars.length, text = ""; i < len; i++) {
//     text += cars[i] + "<br>";
// }
// switch (new hero1().getPrompt()) {
//     case 0:
//         hero1 = WOW;
//         break;
//     case 1:
//         hero1 = WOW;
//         break;
//
//
// }


//
//Rules

//Any path the user goes down must ask them at least three questions.
//There must be a minimum of seven total destinations the user could arrive at based on their responses.
//For at least one of the questions asked, there must be more than two possible user responses.
//Your code must contain at least one loop.
//Your code must contain at least one switch statement
//Your code must make use of both string and number user inputs.
//Hint: You may need parseInt() and toString()
