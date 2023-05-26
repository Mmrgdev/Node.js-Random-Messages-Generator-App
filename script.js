/** Node.js Random Messages Generator App
 * This application allows you to generate a random message about your future based on your sign, luck and advice.
*/

// @object fate includes the different values that the different properties of the object can take.
const fate = {
    sign: ['star', 'moon', 'sun', 'comet'],
    luck: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
  };

// @function generateRandomNumber() to generate a random number that we will use it to have an aleatory value of the properties of the object.
function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

// @let personalFate variable to store the 'future' in an array.
let personalFate = [];

// @for statement to iterate over the object.
for(let i in fate) {
  let result = generateRandomNumber(fate[i].length);

  // @switch statement that use the object's properties to customize the message being added to personalFate. 
  switch(i) {
    case 'sign':
      personalFate.push(`Your sign is a '${fate[i][result]}'.`);
      break;
    case 'luck': 
      personalFate.push(`You are having: '${fate[i][result]}'.`);
      break;
    case 'advice': 
      personalFate.push(`Your advice is to: '${fate[i][result]}'.`);
      break;
    default: 
      personalFate.push('There is not enough info.');
      break;
    }  
}

// @function getYourFate() to generate the random message.
function getYourFate() {
    const yourFate = personalFate.join('\n');
    console.log(yourFate);
}

// @function getYourFate to obtain our random message.
getYourFate(personalFate);