{
	/* 
    Enum
  */
	// JavaScript
	const MAX_NUM = 6;
	const MAX_STUDENTS_PER_CLASS = 6;
	const MONDAY = 0;
	const TUESDAY = 1;
	const WEDNESDAY = 2;
	const DAYS_ENUM = Object.freeze({ THURSDAY: 3, FRIDAY: 4 });
	const dayOfToday = DAYS_ENUM.THURSDAY;

	// TypeScript
	// capital letter only for first one with enum
	enum Days {
		Monday, // 0
		Tuesday, // 1
		Wednesday, // 2
		Thursday, // 3
		Friday, // 4
		Saturday, // 5
		Sunday, // 6
	}

	/* 
  // able to set first index
	enum Days {
		Monday = 1, // 1
		Tuesday,    // 2
		Wednesday,  // 3
		Thursday,   // 4
		Friday,     // 5
		Saturday,   // 6
		Sunday,     // 7
  } 
  */

	/* 
  // able to set string too
	enum Days {
		Monday = 'mon', 
		Tuesday = 'tue',  
		Wednesday = 'wed',
		Thursday = 'thu', 
		Friday = 'fri',   
		Saturday = 'sat', 
		Sunday = 'sun',   
  } 
  */

	// enum ruins proof of type
	// avoid to use it
	let day: Days = Days.Saturday;
	day = 10; // works without compile error
	console.log(day);

	// could be replaced with union type
	// provides auto complition
	// typo filtering(wrong input)
	type DaysofWeek =
		| "Monday"
		| "Tuesday"
		| "Wednesday"
		| "Thursday"
		| "Friday"
		| "Saturday"
		| "Sunday";
}
