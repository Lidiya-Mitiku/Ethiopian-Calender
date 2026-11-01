let date=document.getElementById("date");
let day=document.getElementById("day");
let month=document.getElementById("month");
let year=document.getElementById("year");

const today =new Date();
  
let options={
    calander:"ethopic",
    day:"numeric",
    month:"long",
    year:"numeric"
};

let parts= new Intl.DateTimeFormat(
    "en-ET-u-ca-ethiopic",options).formatToParts(today);

   
    date.innerHTML=parts.find(p => p.type === "day").value
    month.innerHTML=parts.find(p => p.type === "month").value
    year.innerHTML=parts.find(p => p.type === "year").value

     day.innerHTML=new Intl.DateTimeFormat("en-US",{
        weekday:"long"
     }).format(today);
