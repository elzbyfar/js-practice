// Problem Statement
// You need to pick up some food for a camping trip. To save time in the store, you decide to optimize your shopping by only visiting each department once instead of simply following your list. You’d like to know how much time this will save you.

// You will be given a list of pairs of products and what departments they are in. You will also be given a shopping list. Given these, return the difference in the number of department visits needed if you optimize your shopping. For example, if it would take 5 department visits by following your shopping list in order, and 2 if you optimize your shopping by only visiting each department once, return 3.

// Any product in your shopping list will be in the product/department pairs. Items will only appear on the shopping list once. Products will only appear in one department.

// Examples
// For example, if the store has the following four products:

// # Product      Department
//   Cheese       Dairy
//   Yogurt       Dairy
//   Coffee       Pantry
//   Pasta        Pantry
// If your shopping list is Cheese, Coffee, Yogurt, Pasta, if you follow that list in order, you would make 4 department visits (Dairy, Pantry, Dairy, Pantry). However, with optimal ordering you could get these items with 2 department visits. You would return 2 (4 - 2 = 2)

// However, if your shopping list was Cheese, Coffee, Pasta, following that list in order would result in 3 department visits. Optimally, you would get the items in two department visits, so you would return 1 (3 - 2 = 1)

let products = [
	[ 'Cheese', 'Dairy' ],
	[ 'Carrots', 'Produce' ],
	[ 'Potatoes', 'Produce' ],
	[ 'Canned Corn', 'Pantry' ],
	[ 'Romaine', 'Produce' ],
	[ 'Yogurt', 'Dairy' ],
	[ 'Flour', 'Pantry' ],
	[ 'Iceberg', 'Produce' ],
	[ 'Coffee', 'Pantry' ],
	[ 'Pasta', 'Pantry' ],
	[ 'Milk', 'Dairy' ],
	[ 'Grapes', 'Produce' ],
	[ 'Pasta Sauce', 'Pantry' ]
];

let shopping_list = [ 'Cheese', 'Potatoes', 'Grapes', 'Canned Corn' ];

function ordered_shopping(products, shopping_list) {
	// Your code here.
	let improvedFlow = new Set();
	let orderedFlow = 0;
	let prevDept = '';

	let productHash = Object.fromEntries(products);

	for (let item of shopping_list) {
		let dept = productHash[item];
		if (dept !== prevDept) {
			orderedFlow += 1;
		}

		improvedFlow.add(dept);

		prevDept = dept;
	}

	return orderedFlow - improvedFlow.size;
}

console.log(ordered_shopping(products, shopping_list));
