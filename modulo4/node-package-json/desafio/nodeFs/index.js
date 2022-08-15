/* 
  **Exercício 3**
    
    Crie uma aplicação Node que receba uma string representando **uma tarefa.** O programa 
    deve adicionar a **nova tarefa** em uma variável que represente uma **lista de tarefas.** 
    A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à 
    lista, exiba a lista atualizada.
        Terminal: node index.js "Lavar roupa"
        index.js: 
          const tarefas = ["lavar a louça", "Comprar Leite"]
          tarefas.push(process.argv[2])
          console.log("Tarefa adicionada com sucesso!")
          console.log(`Lista de tarefas:  ${tarefas}`)
*/

import { writeFile, readFile } from "fs";

const tarefas = ["lavar a louça", "Comprar Leite"];
tarefas.push(process.argv[2]);

const listaTarefas = tarefas.toString()

writeFile("input.txt", listaTarefas, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log("Tarefa adicionada com sucesso!");
  console.log(`Lista de tarefas:  ${tarefas}`);

  readFile("input.txt", function(err, data) {
    if (err) {
      return console.error(err);
    }
    console.log(`Lista de tarefas:` + data);
  });
});
