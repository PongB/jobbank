function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  //alert("yearOfStudy = "+yearOfStudy);
  let hourlyRate;
    switch(yearOfStudy) {
        case 1:
            hourlyRate = 55;
            break;
        case 2:
            hourlyRate = 65;
            break;
        case 3:
            hourlyRate = 75;
            break;
        case 4:
            hourlyRate = 85;
            break;
        default:
            hourlyRate = 55; 
    } 

    const hoursPerDay = 8;
    let totalHours = workDays * hoursPerDay;
    let totalPayment = totalHours * hourlyRate;
 
    
    return totalPayment;
}


