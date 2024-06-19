let num;
let num2;
let MDC;


console.log("Digite um numero para fazer seu mmc");
process.stdin.on("data",function(data){
    entrada = +(data.toString().trim());
    if(!num){
        if(!isNaN(entrada)){
        num = entrada;
        console.log("Digite o segundo número");
        } else{
            console.log("Digite um numero válido");
        }
    }else if(!num2){
        if(!isNaN(entrada)){
        num2 = entrada;
        let maior;
        let menor;
        if(num > num2){
            maior = num;
            menor = num2;
        }else{
            maior = num2;
            menor = num;
        }
        let aux = maior;
        while(true){
            if(aux % menor === 0 && aux % maior === 0){//ele confere de uma forma conferindo loop por loop se consegue um 0 nos 2 e cada vez que não aumenta um numero 
                break;
            }
        aux++;
        }
        console.log("O MMC dos números é: " + aux);
        process.exit();
        }
    }else{
        console.log("Digite algo válido");
    }
});