/**
 * - Exercício 5
    
    Você foi contratado por um escritório médico para organizar a agenda de consultas
    
    ```tsx
    [
      { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
      { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
      { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
      { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
    ]
    
    ```
    
    A sua tarefa é criar uma função que receba o **array** acima como parâmetro e retorne 
    um `array`de consultas ordenado pelos nomes dos pacientes (em ordem alfabética). ****Para 
    isso crie um `type` para as consultas.
 */
type Consulta = {
  nome: string,
  idade: number,
  dataDaConsulta: string
}

let pacienteLista:Consulta[] = [
  
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
  
]

function organizaData (data:Consulta[]) {


}

organizaData(pacienteLista)