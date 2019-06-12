function daysInYear(year) {
  try {
    return daysAmountInYear(year);
  } catch (error) {
    return error.message;
  }
}

function daysAmountInYear(year) {
  if (Number.isInteger(year) && year > 0) {
    const thisYearEnd = new Date(year + 1, 0, 1);
    const thisYearStart = new Date(year, 0, 1);
    const daysAmount = (thisYearEnd.getTime() - thisYearStart.getTime()) / (3600000 * 24);
    return daysAmount;
  } else {
    throw new TypeError("exeption");
  }
}

console.log(daysInYear(2019)); // 365
console.log(daysInYear('2019')); // exception
console.log(daysInYear(2020)); // 366
console.log(daysInYear(2020.2)); // exception
console.log(daysInYear(2100)); // 365
console.log(daysInYear({ year: 2100 })); // exception
