# Summa funktsioon
Kirjuta programm mis küsib kasutajalt kahte arvu ja liidab need kokku.  
**Näidis sisend:**  
Esimene arv: 25  
Teine arv: 38  
**Eeldatav väljund:**  
Antud arvude summa on 63  


var a = +prompt('Sisesta esimene number..');
var b = +prompt('Sisesta teine number..');
alert ("Nende kahe summa on" + " " + (a + b));






# Arvude summa - array
Kirjuta funktsioon mis võtab sisendiks numbritega massiivi ja liidab kõik arvud kokku.  
**Näidis sisend:**  
[7, 2, 8]  
**Eeldatav väljund:**  
17  


const array = [3,6,9,12,15,18,21]
const sum = array.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(sum);





 
# Arvude summa - string
Kirjuta programm mis võtab sisendiks tühikutega eraldatud numbrite stringi ja liidab kõik arvud kokku.  
Numbritel pole piirangut, sisestada võib kui palju tahes arve.  
**Näidis sisend:**  
3 4 12 7 15 6  
**Eeldatav väljund:**  
47  

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
 

# Aega möödunud
Kirjuta funktsioon mis võtab sisendiks sekundid ja ütleb kui palju sellest ajast praeguseks möödunud on sekundites, minutites, tundides ja päevades.  
**Näidis sisend:**  
7582  
**Eeldatav väljund:**  
0 päeva  
2 tundi  
6 minutit  
22 sekundit  
