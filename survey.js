const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable ', (answer) => {
  let name = answer 
  rl.question('What is your favourite music? ', (answer) => {
    let musicFav = answer
    rl.question('What is your favourite food? ', (answer) => {
      let foodFav = answer;
      rl.question('Where do you go to school? ', (answer) => {
        let school = answer
        console.log(`My name is: ${name}, and I enjoy eating ${foodFav}, while listening to ${musicFav} at ${school}`);
        rl.close();
      });
    });
  });
});