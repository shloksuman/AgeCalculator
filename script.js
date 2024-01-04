// const date = new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// // This arrangement can be altered based on how we want the date's format to appear.
// let currentDate = `${day}-${month}-${year}`;
// console.log(currentDate); // "17-6-2022"

// function getme(){
//     var dob = document.getElementById("dob").value;
//     console.log("dob is : " , dob);
//     var yearr = dob.substring(0, 4);
//     var month = dob.substring(5, 7);
//     var dayy = dob.substring(8, 10);
//     console.log("year : " , yearr);
//     console.log("month : " , month);
//     console.log("day : " , dayy);
//   //  console.log("date : " , date);
    
//     var d = year -Number(yearr) ;
//     console.log("Your age is : " , d) ;    
// }


let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0]; //to disable future date selection
let result = document.getElementById("result");



function calculateAge(){
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth()+1; //month is 0 indexed , hence 1 is added to it
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2= today.getMonth()+1;
  let y2 = today.getFullYear();

  let d3 , m3 , y3; //stores the difference

  y3 = y2 - y1 ; //current year - DOB year
  if(m2>=m1){
    m3 = m2 - m1 ; //if month of birthday is less than current
  }
  else {
    y3-- ; //else subtract a year from years and add one month to months because we
    //have crossed into next year
    m3 = 12 + (m2-m1) ;
  }

  if(d2>=d1){
    d3 = d2 - d1 ;
  }
  else {
    m3-- ; //if the days are not enough for this month, then decrease the month
    //and set day as remaining days plus 1
    d3 = getDaysInMonth(y1, m1) + d2 - d1 ;
  }
  if(m3<0){
    m3 = 11 ;
    y3--;
  }

  result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old`;

}

function getDaysInMonth(year,  month){
  return new Date(year, month , 0).getDate();
}


