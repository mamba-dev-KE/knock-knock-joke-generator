//Using a switch 
let number = 0;
const jokeGenerator = number => {
    number = Math.floor(Math.random() * 10);   
    switch (number) {
      case 0:
        return 'Knock, knock.  Who’s there?  Goliath.  Goliath who?  Goliath down, you look-eth tired';
      case 1:
        return 'Knock, knock.  Who’s there?  Broccoli?  Broccoli who?  Broccoli doesn’t have a last name, silly.';
      case 2:
        return 'Knock, knock.  Who’s there?  Wooden shoe.  Wooden shoe who?  Wooden shoe like to hear another joke?';
      case 3:
        return 'Knock, knock.  Who’s there?  Amish.  Amish who?  Really?  You don’t look like a shoe!';
      case 4:
        return 'Knock, knock.  Who’s there?  Boo.  Boo hoo?  Why are you crying?';
      case 5:
        return 'Knock, knock.  Who’s there?  Atch.  Atch who?  Bless you!';
      case 6:
        return 'Knock, knock. Who’s there? A little old lady. A little old lady who? I didn’t know you could yodel!';
      case 7:
        return 'Knock, knock. Who’s there? Cows go. Cows go who? No silly, cows go MOO!';
      case 8:
        return 'Knock, knock.  Who’s there?  Harry.  Harry who?  Harry up and answer the door!';
      case 9:
        return 'Knock, knock.  Who’s there?  Cash.  Cash who?  No thanks, but I’ll take a peanut if you have one!';

    }
  };

console.log(jokeGenerator(number)); 

/*// Implementation using an array
const knockJokes = ['Knock, knock.  Who’s there?  Goliath.  Goliath who?  Goliath down, you look-eth tired', 'Knock, knock.  Who’s there?  Broccoli?  Broccoli who?  Broccoli doesn’t have a last name, silly.', 'Knock, knock.  Who’s there?  Wooden shoe.  Wooden shoe who?  Wooden shoe like to hear another joke?', 'Knock, knock.  Who’s there?  Amish.  Amish who?  Really?  You don’t look like a shoe!', 'Knock, knock.  Who’s there?  Boo.  Boo hoo?  Why are you crying?', 'Knock, knock.  Who’s there?  Atch.  Atch who?  Bless you!', 'Knock, knock. Who’s there? A little old lady. A little old lady who? I didn’t know you could yodel!', 'Knock, knock. Who’s there? Cows go. Cows go who? No silly, cows go MOO!' , 'Knock, knock.  Who’s there?  Harry.  Harry who?  Harry up and answer the door!', 'Knock, knock.  Who’s there?  Cash.  Cash who?  No thanks, but I’ll take a peanut if you have one!'];

let number;
const jokeGenerator = arr => {
  for (let i = 0 ; i < arr.length ; i++) {
    return arr[Math.floor(Math.random() * arr.length )];
  }
};

console.log(jokeGenerator(knockJokes));
*/