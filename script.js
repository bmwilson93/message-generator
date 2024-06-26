// Message Generator Portfolio Project
// Codecademy Project

// Game Idea Generator

const subjects = [];
const actions = [];
const reasons = [];

// generate a number between 0 - array.length (for each array)
let subject  = Math.floor(Math.random() * subjects.length);
let action  = Math.floor(Math.random() * actions.length);
let resons  = Math.floor(Math.random() * reasons.length);

// build out the result string
// display