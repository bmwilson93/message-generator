// Message Generator Portfolio Project
// Codecademy Project

// Game Idea Generator

const subjects = ['A squirrel', 'A car', 'Several chipmunks', 'A robot named Bob', 'A forgotten spirit'];
const actions = ['travels to the ends of the Earth', 'fights through a horde of zombies', 'learns to do ninja stuff', 'practives backflips', 'drive a racecar'];
const reasons = ['to stop an evil robot', 'to learn the power of friendship', 'to start a new life on a farm', 'to save their dad', 'to eat a really big burrito'];

// generate a number between 0 - array.length (for each array)
let subject  = subjects[Math.floor(Math.random() * subjects.length)];
let action  = actions[Math.floor(Math.random() * actions.length)];
let reason  = reasons[Math.floor(Math.random() * reasons.length)];

// build out the result string
let result = `${subject} ${action} ${reason}.`;

// display
console.log(result);