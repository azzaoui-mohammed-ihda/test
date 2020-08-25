let nbr=Math.random()*100;
nbr=Math.floor(nbr);    // cette fonction permet de rendre le nombre sans virgule
console.log(nbr);
var n=prompt("entrer un nombre")
n=parseInt(n)
i=0
while(n!=nbr){ 
  i+=1
  n=parseInt(n)
  if (n>nbr){
    n=prompt("plus petit")
  }
  else{
    n=prompt("plus grand")
  }
}
console.log("vous avez reussi apres ",i,"tentativess")


