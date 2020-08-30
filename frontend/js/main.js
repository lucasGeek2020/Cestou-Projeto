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
    removeClasse("menuLateral","-ativo");
    removeClasse("background","-ativo");
};

let menu = getID("showMenu");
menu.onclick = () =>{
    adicionaClasse("menuLateral","-ativo");
    adicionaClasse("background","-ativo");
   
    
}

