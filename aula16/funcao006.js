// Função que calcula o fatorial e mostra da seguinte forma: Ex.: 5! = 5 x 4 x 3 x 2 x 1

function calcularFatorial(numero) {
    let resultado = 1;
    let expressao = '';
    
    for (let i = numero; i >= 1; i--) {
      resultado *= i;
      expressao += i == 1 ? `${i}` : `${i} x `;
    }
  
    return `${expressao} = ${resultado}`;
  }
  
  console.log(calcularFatorial(8000)); // !5 = 5 x 4 x 3 x 2 x 1 = 120
  