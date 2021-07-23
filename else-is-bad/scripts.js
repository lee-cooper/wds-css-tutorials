const p = {
  age: 21
}

// Initial code to be refactored
function canDrink(person) {
  if(person?.age != null) {
    if(person.age < 18) {
      console.log('Nope!');
    } else if (person.age < 21) {
      console.log('Not in the US');
    } else {
      console.log('Yes');
    }
  } else {
    console.log('Not a person')
  }
}

// canDrink(p);

// Code refactored by Lee - Part 1
// Eliminating else if and else
function canDrinkPart1(person) {
  if(person?.age == null) return console.log('Not a person');
  if(person.age < 18) return console.log('Nope!');
  if(person.age < 21) return console.log('Not in the US');
  
  return console.log('Yes!');
}

// canDrinkPart1(p);

/* Comments 
- Eliminates nested conditions
- less cognitive load to know the contents of previous if statements
- more concise / readable
*/

// Code refactored by Lee - Part 2
// keeping if and else, but eliminating else-if
function canDrinkPart2(person) {
  if(person?.age != null) {
    if(person.age < 18) return console.log('Nope!');
    if(person.age < 21) return console.log('Not in the US');
      
    return console.log('Yes!');
  } else {
    return console.log('Not a person')
  }
}

// canDrinkPart2(p);

/* Comments 
- Doesn't eliminate nested conditions
- still have to account for initial if/else branch
- more readable than the initial code, but still crowded
*/

// Code refactored by Lee - Part 3
// same as part 1, but with different formatting
function canDrinkPart3(person) {
  if(person?.age == null) {
    return console.log('Not a person');
  }
  if(person.age < 18) {
    return console.log('Nope!');
  }
  if(person.age < 21) { 
    return console.log('Not in the US'); 
  }
  
  return console.log('Yes!');
}

canDrinkPart3(p);

/* Comments 
- Functionally the same as part 1, but different formatting
- Eliminates nested conditions
- less cognitive load to know the contents of previous if statements
- still concise and readable, but I prefer part 1 from an
  aesthetic point of view
*/

/* Conclusion
- I like my part 1 refactor the most, as it seems to be the most concise
  implementation while also being very readable. It cuts down on the excess
  number of brackets in part 3, which had the same implementation, just formatted
  a little differently, and reduced my need to remember the chain of if/else ifs
  that preceded the last condition that I was working on. By having multiple return
  points, it became very clear what the output would be based on a condition

  else-if and else, certainly have their place in programming, but using this 
  method, I can cut down on the amount of code and cognitive load required
  needed for the majority of my statements.
*/