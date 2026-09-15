let newH1;
let flag = true;

// Creating function
const calculate = () => {
  // Get input elements
  let pTag = document.querySelector("#p");

  let date = pTag.nextElementSibling;
  let month = date.nextElementSibling;
  let year = month.nextElementSibling.nextElementSibling;

  // Today's date
  let todayDate = new Date();

  let d = todayDate.getDate();
  let m = todayDate.getMonth() + 1;
  let y = todayDate.getFullYear();

  // User's month
  let convert = month.value;

  // Month conversion
  let monthNumber = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  // Convert user's month name to number
  let birthMonth = monthNumber[convert];

  // Convert date and year to numbers
  let birthDate = parseInt(date.value);
  let birthYear = parseInt(year.value);

  // Validate date
  if (birthDate < 1 || birthDate > 31 || isNaN(birthDate)) {
    window.alert("Invalid date..");
    return;
  }

  // Validate month
  if (birthMonth === undefined) {
    window.alert("Invalid month..");
    return;
  }

  // Validate year
  if (isNaN(birthYear) || birthYear > y) {
    window.alert("Invalid year..");
    return;
  }

  // Calculate age
  let calc = y - birthYear;
  let calc1 = m - birthMonth;

  // If birthday month has not arrived yet
  if (calc1 < 0) {
    calc--;
    calc1 += 12;
  }

  // Create H1 only once
  if (flag) {
    newH1 = document.createElement("h1");
    document.body.appendChild(newH1);
    flag = false;
  }

  // Display result
  newH1.innerText = calc + " year old and " + calc1 + " months";

  // Clear inputs
  date.value = "";
  month.value = "";
  year.value = "";
};
