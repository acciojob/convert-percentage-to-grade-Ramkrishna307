function calculateGrade(percentage) {
  //your code here
	 // Check if the input is a valid number and within the valid range
  if (typeof percentage !== 'number' || !isFinite(percentage) || percentage < -100 || percentage > 100) {
    return 'F';
  }

  // Round the percentage to the nearest integer using bitwise OR
  const roundedPercentage = percentage | 0;

  // Determine the letter grade based on the rounded percentage
  if (roundedPercentage >= 90) {
    return 'A';
  } else if (roundedPercentage >= 80) {
    return 'B';
  } else if (roundedPercentage >= 70) {
    return 'C';
  } else if (roundedPercentage >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}
const percentage = parseInt(prompt("Enter Percentage."));
alert(calculateGrade(percentage));
