let mails = ["juan@gmail.com","diego@yahoo.com","maria@hotmail.com","damian.gmail.com","juana"];
let mailsValidos =[];
let mailsNoValidos = [];

let count=0;
function verificador(array){
    
    if(array[count].includes("@")){
        mailsValidos.push(array[count]); 
        count++;
    }
    else{
        mailsNoValidos.push(array[count]);
        count++;
    }
}

const pValidos = document.getElementById("validos");
const pNoValidos = document.getElementById("noValidos");

function iniciar(){
    verificador(mails);
    pValidos.innerText=mailsValidos; 
    pNoValidos.innerText=mailsNoValidos;
}