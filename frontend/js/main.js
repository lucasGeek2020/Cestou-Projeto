function getID(idName){
    let elemento;
    elemento = document.getElementById(idName);
    return elemento;
}
function adicionaClasse(id,classe){
    getID(id).classList.add(classe);
}
function removeClasse(id,classe){
    getID(id).classList.remove(classe)
}
getID("background").onclick = () =>{
    removeClasse("menuLateral","-displayOn");
    removeClasse("background","-displayOn");
};

let menu = getID("showMenu");
menu.onclick = () =>{
    adicionaClasse("menuLateral","-displayOn");
    adicionaClasse("background","-displayOn");
   
    
}

