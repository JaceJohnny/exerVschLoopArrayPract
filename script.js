//1.
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

const arr = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
const counts = {};

for (const num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log("Computer count="); console.log(counts['computer']);

//2.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  var notOldenough = []
  var Oldenough = []

  for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++)
  if(peopleWhoWantToSeeMadMaxFuryRoad[i].age <18){
    console.log("not old enough")
    notOldenough.push(peopleWhoWantToSeeMadMaxFuryRoad[i])
  }else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >18){
    console.log("is old enough")
    Oldenough.push(peopleWhoWantToSeeMadMaxFuryRoad[i])
  }
  
//personalized message
//It seems to read across but for some reason is saying that name is undefined. 
  for (i = 0; i < notOldenough.length; i++)
    console.log(notOldenough[i].name, "is not old enough to see Mad Max")
  
  for (i = 0; Oldenough.length; i++) 
    console.log(Oldenough[i].name, "is old enough to see Mad Max")
  
//with pronouns

for (i = 0; i < notOldenough.length; i++)
if(notOldenough[i].gender === "female"){
  console.log(notOldenough[i].name, "is not old enough, do not let her in.")
} else if (notOldenough[i].gender === "male"){
  console.log(notOldenough[i].name, "is not old enough, do not let him in.")
}
for (i = 0; i < Oldenough.length; i++)
if(Oldenough[i].gender === "female"){
  console.log(notOldenough[i].name, "is old enough, do let her in.")
} else if (Oldenough[i].gender === "male"){
  console.log(Oldenough[i].name, "is old enough, do let him in.")
}