//crie um array chamado listaDeTarefas. Ele será  usado para gaurdar as tarefas que o usu;ario adicionar
//crie uma funcao chamada adicionarTarfea()
//pense quais parametros essa funcao precisa para funcionar?
//o que deve acontecer dentro do corpo da funcao para que a nova tarefa seja incluida na lista?
//deoois, teste o codigo: aficione pelo menos uma tarefa usando funcao e mostr a lista completa no console para verificar se deu certo

let listaDeTarefas = [];

function adicionarTarefas (tarefa){
    listaDeTarefas.push(tarefa);
}

adicionarTarefas("estudar 0");
adicionarTarefas("estudar 1");
adicionarTarefas("estudar 2");
adicionarTarefas("estudar 3");

console.log(listaDeTarefas);
listaDeTarefas.splice(3);
console.log(listaDeTarefas);
//para o mesmo array de listaDeTarefas
//crie uma funcao chamada removerTarefa()

