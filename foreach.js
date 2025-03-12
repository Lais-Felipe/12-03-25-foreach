function contar () {
    let numero = 0; // 
    let TxtNumeroFinal = document.getElementById("TxtNumeroFinal"); // vemos coletar o elemento
    let divNumeros = document.getElementById("divNumeros"); // vai recber o elemento da div numeros 
    divNumeros.innerHTML = "";
    for (let i = numero; i <= TxtNumeroFinal.value; i++) { //i=i+i vai receber o "i" e somar
         divNumeros.innerHTML += i + "<br />"; // += vai saber com que a variável receba ela mesma + o valor desajado
    }
}

document.getElementById("TxtNumeroFinal").addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {// o código 13 é quando a tecla enter é teclada
        contar();
    } else { 
        if (
            isNaN(event.key) && 
            event.keyCode != 8 &&  // código 8 é quando a tecla backspace (apagar a esquerda) é a teclada
            event.keyCode != 46 && // significa que a tleca delete é teclada
            event.keyCode != 37 && // código 37 significa que a tecla seta para esquerda é teclada
            event.keyCode != 38 && // código 38 significa que a tecla seta para cima é teclada
            event.keyCode != 39 && // código 39 significa que a tecla seta para baixo é teclada
            event.keyCode != 40 && // código 40 significa que a tecla seta para direita é teclada
            event.keyCode != 35 && // código 35 significa que a tecla end é teclada 
            event.keyCode != 36  // código significa que a home é teclada
        ){

        console.log("Não é numérico");
        divNumeros.innerHTML = "Não é permitido teclar uma tecla não numérica! Por favor, tecle uma tecla numérica e tente novamente.";
        }
    }
});

document.getElementById("TxtNumeroFinal").addEventListener('input', function(event) { // quando inserir dados no input ele vai fazer os códigos abaixo
    //console.log(this);
    if (this.value.length > 3) {
        console.log("Tem mais de 3 caracteres");
        if (this.value > 999){
            this.value = 999;
            alert("O número máximo permitivo é 999!");
        } else{
            this.value = this.value.substring(0,3); 
        }
    }
});