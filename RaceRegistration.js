let raceNumber = Math.floor(Math.random() * 1000);
const age = 19;
var registeredEarly = 'true';

if (registeredEarly = 'true' && age > 18){
  console.log(`Race at 9:30 am, your Race number: ${raceNumber}`);
} else if (registeredEarly != 'true' && age > 18){
  console.log(`Race at 11:00 am, your Race number: ${raceNumber}`);
} else if (age < 18) {
  console.log(`Race at 12:30, your Race number: ${raceNumber}`);
} else {
  console.log('runner, see the registration desk');
}
