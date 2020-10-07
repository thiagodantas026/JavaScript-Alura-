console.log(`Trabalhano com condicionais`);


const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
); 

const idadeComprador = 15;
const  estaAcompanhada =  false;
const temPassagemComprada = true;



console.log("Destinos possíveis");
console.log(listaDeDestinos);

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1);

// }else if(estaAcompanhada == true){
//         console.log("Comprador está acomaphado");
//         listaDeDestinos.splice(1,1);
// }else{
//         console.log("Não é maior de Idade e nao vender");
// }
  
if(idadeComprador >= 18 || estaAcompanhada == true ){
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2,1);

}else{
        console.log("Não é maior de Idade e nao vender");
}


console.log("Embarque: \n\n");
if(idadeComprador > 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}




listaDeDestinos.splice(1,1);//removendo item
console.log(listaDeDestinos);

