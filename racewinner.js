// Write a function that will accept an array of "racer-time" objects, and return the name of the winner of
// the race and how much time they won by.
// These "racer-time" objects have the following keys:
// name: racer's name as a string
// time: racer's total time as a string provided in the format "HH:MM:SS"
// In the case that a racer does not finish, their time will be provided as "dnf".
// An example input could look like:
const racers = [
	{
		name: 'Samuel',
		time: 'dnf'
	},
	{
		name: 'Fred',
		time: 'dnf'
	},
	{
		name: 'Cynthia',
		time: 'dnf'
	}
];
// In the above case, the output would be:
// "Fred won by 0 hours, 29 minutes, and 21 seconds"
// If Fred was the only one to finish and every other racer had a time of "dnf", return:
// "Fred won by no contest"
// Finally, if every racer provided in the input had a time of "dnf", return:
// "There is no winner"

const raceWinner = (arr) => {
	let winnerName = '';
	let hours = Infinity;
	let minutes = Infinity;
	let seconds = Infinity;
	let differences = '';
	let dnfCount = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].time === 'dnf') {
			dnfCount += 1;
			continue;
		}
		let name = arr[i].name;
		let time = arr[i].time.split(':');
		let h = parseInt(time[0]);
		let m = parseInt(time[1]);
		let s = parseInt(time[2]);

		if (h < hours || (h === hours && m < minutes) || (h === hours && m === minutes && s < seconds)) {
			let hoursDiff = hours - h;
			let minuteDiff = minutes - m;
			let secondsDiff = seconds - s;

			if (secondsDiff < 0) {
				secondsDiff = (60 + secondsDiff) % 60;
				minuteDiff -= 1;
			}
			if (minuteDiff < 0) {
				hoursDiff -= 1;
			}
			differences = `${name} won by ${hoursDiff} hours, ${minuteDiff} minutes, and ${secondsDiff} seconds`;
			seconds = s;
			minutes = m;
			hours = h;
			winnerName = name;
		}
	}

	if (dnfCount === arr.length - 1) {
		return `${winnerName} won by no contest`;
	}

	if (dnfCount === arr.length) {
		return 'There is no winner';
	}

	return differences;
};

console.log(raceWinner(racers));
