function daysInYear(year){
  try {

    if(!Number.isInteger(year)) {
    throw new Error (`exception`);
  } 
    let start = new Date(year,0, 0);
    let end = new Date(year,11,31);
    let diff = end-start;
    let days = diff/(1000*60*60*24);
    return days;

  } catch(e) {
    return e.message;
  }
};
 
 console.log (daysInYear(2019)); // 365
 console.log (daysInYear('2019')); // exception
 console.log (daysInYear(2020)); // 366
 console.log (daysInYear(2020.2)); // exception
 console.log (daysInYear(2100)); // 365
 console.log (daysInYear({year: 2100})); // exception
 