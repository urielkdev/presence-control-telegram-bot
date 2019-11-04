const scriptPresence = require('./script-presence');
const scriptGrade = require('./script-grade');

const getPresence = async () => {
  let resp = await scriptPresence();
  console.log(resp);
  return;
};

const getGrade = async () => {
  let resp = await scriptGrade();
  console.log(resp);
  return;
};

// getPresence();
// getGrade();