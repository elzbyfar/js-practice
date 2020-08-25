function recurringTask(firstDate, k, daysOfTheWeek, n) {
	if (n === 1) {
		return [ firstDate ];
	}

	const recurringEvents = [];

	const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

	const months = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

	const isLeap = (year) => year % 4 === 0;

	let format = firstDate.split('/');
	format = `${format[1]}/${format[0]}/${format[2]}`;

	const firstWeekDay = new Date(format).getDay();

	const daysOfTheWeekIndexes = [];
	daysOfTheWeekIndexes.push(firstWeekDay);
	for (let i = 0; i < daysOfTheWeek.length; i++) {
		if (daysOfTheWeek[i] !== days[firstWeekDay]) {
			daysOfTheWeekIndexes.push(days.indexOf(daysOfTheWeek[i]) === 0 ? 7 : days.indexOf(daysOfTheWeek[i]));
		}
	}

	let dateArray = firstDate.split('/');

	if (daysOfTheWeekIndexes.length === 1) {
		recurringEvents.push(firstDate);

		for (let i = 1; i < n; i++) {
			months[1] = isLeap(parseInt(dateArray[2])) ? 29 : 28;
			if (parseInt(dateArray[0]) + k * 7 > months[parseInt(dateArray[1]) - 1]) {
				if (parseInt(dateArray[1]) + 1 > 12) {
					dateArray[2] = parseInt(dateArray[2]) + 1;
					dateArray[1] = '01';
				} else {
					if (parseInt(dateArray[1]) < 10) {
						dateArray[1] = '0' + (parseInt(dateArray[1]) + 1).toString();
					} else {
						dateArray[1] = parseInt(dateArray[1]) + 1;
					}
				}
				dateArray[0] = '0' + (parseInt(dateArray[0]) + k * 7 - months[parseInt(dateArray[1]) - 1]);
			} else {
				dateArray[0] = parseInt(dateArray[0]) + k * 7;
			}
			recurringEvents.push(dateArray.join('/'));
		}
		return recurringEvents;
	}

	while (n > 0) {
		for (let i = 0; i < daysOfTheWeekIndexes.length; i++) {
			months[1] = isLeap(parseInt(dateArray[2])) ? 29 : 28;

			if (recurringEvents.length === 0) {
				recurringEvents.push(firstDate);
			} else {
				if (i > 0) {
					if (parseInt(dateArray[0]) + k * 7 > months[parseInt(dateArray[1]) - 1]) {
						if (parseInt(dateArray[1]) + 1 > 12) {
							dateArray[2] = parseInt(dateArray[2]) + 1;
							dateArray[1] = '01';
						} else {
							if (parseInt(dateArray[1]) < 10) {
								dateArray[1] = '0' + (parseInt(dateArray[1]) + 1).toString();
							} else {
								dateArray[1] = parseInt(dateArray[1]) + 1;
							}
						}
						console.log(daysOfTheWeekIndexes);
						if (parseInt(dateArray[0]) > 10) {
							dateArray[0] =
								parseInt(dateArray[0]) +
								daysOfTheWeekIndexes[i === daysOfTheWeekIndexes.length - 1 ? i - 1 : i];
						} else {
							dateArray[0] =
								'0' +
								(parseInt(dateArray[0]) +
									daysOfTheWeekIndexes[i === daysOfTheWeekIndexes.length - 1 ? i - 1 : i]);
						}
					}
				}
				recurringEvents.push(dateArray.join('/'));
				if (i === daysOfTheWeekIndexes.length - 1) {
					dateArray[0] = parseInt(firstDate.split('/')[0]) + k * 7;
				}
			}
			n--;
		}
	}

	return recurringEvents;
}

console.log(recurringTask('01/02/2100', 4, [ 'Sunday', 'Monday' ], 4));
