// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Example

// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

// let test = '(baz)';
// let test = 'foo(bar(baz))blim';
// let test = 'foo(bar(baz))blim';
let test = 'foo(bar(baz))blim';

function reverseInParentheses(inputString) {
	let stack = [];

	let output = inputString.split('');

	const reverseInPlace = (arr, i, j) => {
		for (; i < j; i++, j--) {
			[ arr[i], arr[j] ] = [ arr[j], arr[i] ];
		}
	};

	for (let i = 0; i < output.length; i++) {
		if (output[i] === '(') {
			output[i] = '';
			stack.push(i);
		} else if (output[i] === ')') {
			output[i] = '';
			reverseInPlace(output, stack.pop(), i);
		}
	}

	return output.join('');
}

console.log(reverseInParentheses(test));
