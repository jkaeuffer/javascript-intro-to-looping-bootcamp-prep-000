function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
  }
  return array
};

function whileLoop(n) {
  let countdown = n
  while (countdown > 0) {
    console.log(countdown);
    countdown--
  }
  return 'Done'
};

function doWhileLoop(array) {
  
};
