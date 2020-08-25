function somme(t){
    let s=0;
    for (e in t){
        s=t+s;
    }
    return s
}
let T= new Array();
let a=prompt("Donner un nombre de votre choix");
while(isNaN(a){
    T.push(parseInt(a));
    a=prompt("Donner un nombreeee");
}
console.log(T);
let som=somme(T);
console.log("la somme est : ",som);