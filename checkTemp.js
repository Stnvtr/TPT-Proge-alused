console.log("Tere tulemast")

function checkTemp (c) {

    if       (0 <= c && c <=20) return -1;
     
    else if (21 <= c && c <= 40) return 0;

    else if (41 <= c && c <= 60) return +1;
 
} 

console.log (checkTemp ()) // sisesta number kontrolliks

console.log ("Head aega")