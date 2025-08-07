//voce tem uma lista de alunas  e cada uma gosta de um sabor especifico de sorvete
// imprima uma lista que mostra lado a lado 
//exemplo: Ana - sabor favorito: chocolate

let pessoas = ["laura", "ana", "julia"]
let sorvete = ["morango", "chocolate", "menta"]


for (let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i]} — sabor favorito: ${sorvete[i]}`);
  }