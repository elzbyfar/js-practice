// Write a function mixPotions that accepts one argument, an array of potion objects, and returns the
// potion that is produced when they are mixed.
// A potion is represented in the following format:
// {
// volume: x,
// ingredients: { ingredient1: a, ingredient2: b, ingredientA: c }
// }
// Where x is a positive number representing the volume of the potion and a, b, and c are positive numbers
// representing the concentrations of the corresponding ingredients in the potion.
// In the above example, the potion has three different ingredients, but a potion can have any number of
// different ingredients. The function should accept any positive number of potions. Each potion can have
// any non-negative number of different ingredients.
// After mixing, the resulting potion should have a volume equal to the sum of the volumes of the input
// potions. Also, the resulting potion should have volume-weighted concentrations of each ingredient in
// the input potions.
// Example:

// The above should return:
// { volume: 400,
// ingredients: { ingredient1: 125, ingredient2: 5, ingredientA: 350,
// ingredientB: 712.5 } }
// The result's volume is 400 because 100 + 300 = 400.
// The result's concentration of ingredient1 is 125. We can determine this because first potion has 50 units
// of concentration in 100 units of volume and the second potion has 125 units of concentration in 300
// units of volume, and (50*100 + 150*300)/(100 + 300) = 125.
// Only one of the potions has any of ingredient2, Using the same math, but with 0 for the concentration of
// ingredient2 in the second potion, we get (20*100 + 0*300)/(100 + 300) = 5.

const arr = [
	{
		volume: 100,
		ingredients: { ingredient1: 50, ingredient2: 20, ingredientA: 500 }
	},
	{
		volume: 300,
		ingredients: { ingredient1: 150, ingredientA: 300, ingredientB: 950 }
	}
];

const mixPotions = (arr) => {
	let concentration = {
		volume: 0,
		ingredients: {}
	};

	for (let i = 0; i < arr.length; i++) {
		let potion = arr[i];

		let ingredientKeys = Object.keys(potion.ingredients);
		concentration.volume += potion.volume;

		for (let j = 0; j < ingredientKeys.length; j++) {
			let ingredientName = ingredientKeys[j];
			let concUnit = potion.ingredients[ingredientName];
			let concentrationProd = concUnit * potion.volume;

			if (concentration.ingredients[ingredientName]) {
				concentration.ingredients[ingredientName] += concentrationProd;
			} else {
				concentration.ingredients[ingredientName] = concentrationProd;
			}
		}
	}

	let outputObjectKeys = Object.keys(concentration.ingredients);

	for (let i = 0; i < outputObjectKeys.length; i++) {
		concentration.ingredients[outputObjectKeys[i]] /= concentration.volume;
	}

	return concentration;
};

// console.log('hey');
console.log(mixPotions(arr));
