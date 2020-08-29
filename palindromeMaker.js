// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

// Example

// For st = "abcdc", the output should be
// buildPalindrome(st) = "abcdcba".

function buildPalindrome(st) {
	let shortest = st.split('');
	const palindromizer = () => {
		for (let i = 0, j = shortest.length - 1; i <= shortest.length / 2; i++, j--) {
			if (shortest[i] !== shortest[j]) {
				shortest.splice(j + 1, 0, shortest[i]);
				j++;
			}
		}
	};

	palindromizer();
	let count = 0;

	for (let i = 0; i < st.length; i++) {
		if (st[i] !== shortest[i]) {
			shortest.splice(i, 0, st[i]);
			count++;
		}
	}

	if (count > 0) {
		palindromizer();
	}

	return shortest.join('');
}
