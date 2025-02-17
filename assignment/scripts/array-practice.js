console.log('****** Array Practice *******');

// Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);
// prints Animals are fish cat bird dog to the console (without spaces between them)

// 1. TODO: Make an array `favoriteFoods` with some favorite foods
//    Console log your array of foods to the console with a message, 
//    similar to the example above
let favoriteFoods = ['Salmon', 'Pizza', 'Burger', 'Pasta'];
console.log('My favorite foods are: ', favoriteFoods);
// prints My favorite foods are: Salmon Pizza Burger Pasta (without spaces between them)


// Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array?
let numberOfAnimals = animalArray.length
console.log('Number of animals: ', numberOfAnimals);
//prints Number of animals: (then counts the number of animals in the array and shows the numeric value)


// 2. TODO: Create a variable `numberOfFoods`
//    Console log to the console the number of foods
let numberOfFoods = favoriteFoods.length
console.log('I have ', numberOfFoods, ' favorite foods.');
// prints: I have (numeric value based on how many foods were in the list) favorite foods.


// Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
let firstAnimal = animalArray[0];
console.log('First animal is', firstAnimal);

// 3.a. TODO: Create a variable `secondAnimal`
//      Console log the second animal in the array 
let secondAnimal = animalArray[1];
console.log('The second animal is ', secondAnimal, '.');
// prints: The second animal is (then looks at possition 1 in the array and prints that)


// 3.b. TODO: Create a variable `lastAnimal`
//      Console log the last animal in the array using it's array index 
let lastanimal = animalArray.length - 1;
console.log('The last animal is ', lastanimal);
// prints: The last animal is (utilizes (arrayName.length - 1) to find the last item in the array and prints that)


// 3.c. (STRETCH) TODO: Update 3.b to use the array length, 
//      instead of the exact index number of the last item.



// Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
let animalToPush = 'penguin';
animalArray.push(animalToPush);
console.log('Added an animal to end,', animalArray);
// prints: Added an animal to the end (then uses the defined animalToPush followed by using the .push function to add it to the end of the array) and loggs the whole list.


// 4.a. TODO: Create a variable `dessert` and assign it to a new food.
//      Add the `dessert` at the end of your array & log the array
let dessert = 'oreo icecream';
favoriteFoods.push(dessert);
console.log('Added a dessert to the list of favorite foods ', favoriteFoods);
//prints: Added a dessert to the list of favorite foods (followed by the updated favorite foods thanks to the .push funtion)


// Example: Add an animal to the beginning using Array.unshift
let animalToUnshift = 'walrus';
animalArray.unshift(animalToUnshift);
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.b. TODO: Create a variable `entree` and assign it to a new food.
//      Add the `entree` at the beginning of the array & log the array
let entree = 'roasted brussel sprouts';
favoriteFoods.unshift(entree);
console.log('Added an entree to the beginning of the favorite foods list ', favoriteFoods);
//prints Added an entree to the beginning of the favorite foods list (then adds roasted brussel sprouts to the beginning (using the .unshift function))


// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// NOTE: Use the `colors` array for 4.c and 4.d.
let colors = ['orange', 'yellow', 'green', 'teal'];

// 4.c. TODO: Create a variable `lastColor`. Remove the color 
//      at the end of your array & assign it to `lastColor`.
//      Console log both the color removed and the updated array.
let lastColor = colors.pop();
console.log( 'we removed the color ', lastColor, ' and this is the remaining colors ', colors);
//prints we removed the color (then uses the variable defined by colors.pop pulling the color teal) and this is the remaining colors (calls the array colors with the remaining colors)


// Example: Remove the first color using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d. TODO: Create a variable `firstColor`. Remove the color 
//      at the beginning of your array & assign it to `firstColor`.
//      Console log both the color removed and the updated array.
firstColor = colors.shift();
console.log('We removed the color ', firstColor, ' and these are the remaining colors ', colors); 
// prints we reomoved the color (then refers to the firstColor defined by removing the first color in the array) and these are the remaining colors (prints the array of the remaining colors)


// STRETCH GOALS:

let gems = ['Topaz', 'Citrine', 'Diamond', 'Emerald', 'Iolite', 'Tanzanite'];

// 5.a (STRETCH) TODO: Replace the second gem with 'Tourmaline'
//      Console log the updated array.

//push.gems[1] = 'Tourmaline';
//console.log(gems);

// 5.b (STRETCH) TODO: Sort your gems array
//     in reverse alphabetical order.
//     Console log the array.


// 5.c (STRETCH) TODO: Create a variable `gemString` and
//     put the word "and" between each item. Research `.join()`.
//     eg "Tourmaline and Topaz and Tanzanite and Iolite and Emerald and Diamond".
//     Console log the string.


// 5.d (STRETCH) TODO: Make a new array `colorfulGems` that combines 
//     the gems array with the colors array.
//     Console log the new array.
//     It should look something like:
//     ['Tourmaline', 'Topaz', 'Tanzanite', 'Iolite', 'Emerald', 'Diamond', 'yellow', 'green']





// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    favoriteFoods: typeof favoriteFoods !== 'undefined' ? favoriteFoods : undefined,
    numberOfFoods: typeof numberOfFoods !== 'undefined' ? numberOfFoods : undefined,
    secondAnimal: typeof secondAnimal !== 'undefined' ? secondAnimal : undefined,
    lastAnimal: typeof lastAnimal !== 'undefined' ? lastAnimal : undefined,
    dessert: typeof dessert !== 'undefined' ? dessert : undefined,
    entree: typeof entree !== 'undefined' ? entree : undefined,
    lastColor: typeof lastColor !== 'undefined' ? lastColor : undefined,
    firstColor: typeof firstColor !== 'undefined' ? firstColor : undefined,
    gems: typeof gems !== 'undefined' ? gems : undefined,
    gemString: typeof gemString !== 'undefined' ? gemString : undefined,
    colorfulGems: typeof colorfulGems !== 'undefined' ? colorfulGems : undefined,
    colors: typeof colors !== 'undefined' ? colors : undefined,
  };
} catch (e) {
  // Do nothing
}