let a = document.getElementById("multiplication-premier-nombre");
 let b = document.getElementById("deuxiem-nombre");
 let btn = document.getElementById("boutsomme");
 let resultatsomme = document.getElementById("resultats-multi");
 
 btn.onclick = function() {
    resultatsomme.innerText = Number(a.value) * Number(b.value);
 }

 let valsous = document.getElementById("nbre-soustrac");
 let valsoustr = document.getElementById("nbre-soustraction");
 let btnn = document.getElementById("boutsoustraction");
 let resultatsoustract = document.getElementById("resultats-soustraction");
 
 btnn.onclick = function() {
    resultatsoustract.innerText = Number(valsous.value) - Number(valsoustr.value);
 }

 
 let valpremieradd = document.getElementById("nbre-additionn");
 let valdeuxiemadd = document.getElementById("nbre-additionnn");
 let bttn = document.getElementById("boutaddition");
 let resultaddition = document.getElementById("resultats-addition");
 
 bttn.onclick = function() {
    resultaddition.innerText = Number(valpremieradd.value) + Number(valdeuxiemadd.value);
 }

  
 let nbrepremierdiv = document.getElementById("nbrediv-premier");
 let nbredeuxiemdiv = document.getElementById("nbrediv-deuxiem");
 let buton = document.getElementById("bout-div");
 let resultadiv = document.getElementById("resultats-division");
 
 buton.onclick = function() {
    resultadiv.innerText = Number(nbrepremierdiv.value) / Number(nbredeuxiemdiv.value);
 }

