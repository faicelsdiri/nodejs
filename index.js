const yargs = require('yargs')
const command =yargs.argv._[0];
if (command==="driving") {
    console.log(`You are Driving 
    Your car is:  ${yargs.argv.car} 
    Your speed is:  ${yargs.argv.speed}`);
    
}
else{
    console.log("you are not Driving ");
}