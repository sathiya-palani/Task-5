// for in loop condition

let myDetails = [
{    
    name : "Sathiya",
    degree : "B.E",
    city : " Dharmapuri",
    state : " Tamilnadu"
} ]

 
for (let key in myDetails[0]){
    console.log(key, myDetails[0][key]);
}

