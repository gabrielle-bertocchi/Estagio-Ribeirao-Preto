1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);



Ao final do processamento, qual será o valor da variável SOMA?

Resposta: O valor de K é somado ao valor da variável SOMA

K = 1, SOMA = 1
K = 2, SOMA = 3
K = 3, SOMA = 6
K = 4, SOMA = 10
K = 5, SOMA = 15
K = 6, SOMA = 21
K = 7, SOMA = 28
K = 8, SOMA = 36
K = 9, SOMA = 45
K = 10, SOMA = 55
K = 11, SOMA = 66
K = 12, SOMA = 78
K = 13, SOMA = 91

O valor da variável SOMA será 91.

********************************************************************

2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

Resposta:
function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
  
    while (b <= numero) {
      if (b === numero) {
        return "O número informado pertence à sequência de Fibonacci.";
      }
      
      let temp = a;
      a = b;
      b = temp + b;
    }
  
    return "O número informado não pertence à sequência de Fibonacci.";
  }
  
  const numeroInformado = 34; 
  const resultado = verificaFibonacci(numeroInformado);
  console.log(resultado);

  3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, 9

b) 2, 4, 8, 16, 32, 64, 122

c) 0, 1, 4, 9, 16, 25, 36, 49

d) 4, 16, 36, 64, 64

e) 1, 1, 2, 3, 5, 8, 13

f) 2,10, 12, 16, 17, 18, 19, 20


4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

Resposta:

function determineInterruptor() {
    // Inicialmente, todos os interruptores estão desligados
    let interruptor1 = false;
    let interruptor2 = false;
    let interruptor3 = false;

    // Primeira ida até a sala das lâmpadas
    interruptor1 = true;

    // Verifica o estado da lâmpada após a primeira ida
    let estadoLampada1 = checkLampada();

    // Desliga o primeiro interruptor e liga o segundo
    interruptor1 = false;
    interruptor2 = true;

    // Segunda ida até a sala das lâmpadas
    let estadoLampada2 = checkLampada();

    // Determina qual interruptor controla cada lâmpada
    if (estadoLampada1 && !estadoLampada2) {
        interruptor3 = true;
    } else if (!estadoLampada1 && !estadoLampada2) {
        interruptor2 = true;
    } else if (!estadoLampada1 && estadoLampada2) {
        interruptor1 = true;
    }

    return [interruptor1, interruptor2, interruptor3];
}

function checkLampada() {
    // Simula a verificação do estado da lâmpada
    // Retorna true se a lâmpada estiver acesa, false caso contrário
    // Você deve implementar a lógica real aqui
    return true; // ou false, dependendo do caso
}

// Chama a função para determinar qual interruptor controla cada lâmpada
const [interruptor1, interruptor2, interruptor3] = determineInterruptor();

// Exibe o resultado
console.log("Interruptor 1 controla a lâmpada:", interruptor1);
console.log("Interruptor 2 controla a lâmpada:", interruptor2);
console.log("Interruptor 3 controla a lâmpada:", interruptor3);



