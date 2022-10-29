# 1. Summa funktsioon
Kirjuta programm mis küsib kasutajalt kahte arvu ja liidab need kokku.  
**Näidis sisend:**  
Esimene arv: 25  Teine arv: 38  
**Eeldatav väljund:**  
Antud arvude summa on 63  

**Minu lahendus:**  
var a = +prompt('Sisesta esimene number..');  
var b = +prompt('Sisesta teine number..');  
alert ("Nende kahe summa on" + " " + (a + b));  




# 2. Arvude summa - array
Kirjuta funktsioon mis võtab sisendiks numbritega massiivi ja liidab kõik arvud kokku.  
**Näidis sisend:**  
[7, 2, 8]  
**Eeldatav väljund:**  
17  


**Minu lahendus:**  
const array = [3,6,9,12,15,18,21]  
const sum = array.reduce((accumulator, value) => {  
  return accumulator + value;  
}, 0);  

console.log(sum);  




# 3. Arvude summa - string
Kirjuta programm mis võtab sisendiks tühikutega eraldatud numbrite stringi ja liidab kõik arvud kokku.  
Numbritel pole piirangut, sisestada võib kui palju tahes arve.  
**Näidis sisend:**  
3 4 12 7 15 6  
**Eeldatav väljund:**  
47  

**Minu lahendus:**  
const string = '3 6 9 12 15 18 21'  
const sumStringNumbers = (str = '') => {  
   const findSum = (arr = []) => {  
      const sum = arr.reduce((acc, val) => acc + val  
      return sum;  
   };  
   let sum = 0;  
   const arr = string  
      .split(' ')  
      .map(Number);  
   sum = findSum(arr);  
   return sum;  
};  
console.log(sumStringNumbers(string));  

# Paaritute arvude summa - string/array
Kirjuta programm mis loeb sisendiks tühikuga eraldatud numbrite stringi ja liidab kokku ainult paaritud arvud.  
**Näidis sisend:**  
3 4 12 7 15 6  
**Eeldatav väljund:**  
25  

# Sekundit teisendatult
Kirjuta funktsioon mis võtab sisendiks sekundid ja teisendab palju see teeb minutites, tundides ja päevades.  
Tulemuse ümardame täisarvuks allapoole ehk 10,6 --> 10 mitte 11  
**Näidis sisend:**  
7582  
**Eeldatav väljund:**  
7582 sekundit on 126 minutit  
7582 sekundit on 2 tundi  
7582 sekundit on 0 päeva  
 
**minu lahendus:**
function toDaysMinutesSeconds(totalSeconds) {  
  const seconds = Math.floor(totalSeconds % 60);  
  const minutes = Math.floor((totalSeconds % 3600) / 60);  
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);  
  const days = Math.floor(totalSeconds / (3600 * 24));  

  const secondsStr = makeHumanReadable(seconds, 'second');  
  const minutesStr = makeHumanReadable(minutes, 'minute');  
  const hoursStr = makeHumanReadable(hours, 'hour');  
  const daysStr = makeHumanReadable(days, 'day');  

  return `${daysStr}${hoursStr}${minutesStr}${secondsStr}`.replace(/,\s*$/, '');  
}  

function makeHumanReadable(num, singular) {  
  return num > 0  
    ? num + (num === 1 ? ` ${singular}, ` : ` ${singular}s, `)  
    : '';  
}  

console.log(toDaysMinutesSeconds(565)); // 👉️ 9 minutes, 25 seconds  
console.log(toDaysMinutesSeconds(2073600)); // 👉️ 24 days  
console.log(toDaysMinutesSeconds(703800)); // 👉️ 8 days, 3 hours, 30 minutes  

# Aega möödunud
Kirjuta funktsioon mis võtab sisendiks sekundid ja ütleb kui palju sellest ajast praeguseks möödunud on sekundites, minutites, tundides ja päevades.  
**Näidis sisend:**  
7582  
**Eeldatav väljund:**  
0 päeva  
2 tundi  
6 minutit  
22 sekundit  
