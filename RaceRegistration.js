let raceNumber = Math.floor(Math.random() * 1000);
let age = 19;
let registeredEarly = true;

if (registeredEarly && age > 18){
  raceNumber += 1000;
}

if (registeredEarly && age > 18){
  console.log(`Race at 9:30 am, your Race number is: ${raceNumber}`);
} else if (!registeredEarly && age > 18){
  console.log(`Race at 11:00 am, your Race number is: ${raceNumber}`);
} else if (age < 18) {
  console.log(`Race at 12:30, your Race number is: ${raceNumber}`);
} else {
  console.log(`runner, see the registration desk`);
}
