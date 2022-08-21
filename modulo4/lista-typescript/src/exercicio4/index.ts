/**
 * - Exercício 4
    
    O seguinte `array` traz as pessoas colaboradoras de uma empresa, com seus salários, setores 
    e se trabalham presencialmente ou por home office:
    
    ```tsx
    [
    	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
    	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
    	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
    	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
    	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
    	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
    	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
    ]
    ```
    
    Considerando o `array`acima, crie um `ENUM` para os setores e um `type` para as pessoas colaboradoras. 
    Em seguida, crie uma função que receba este `array`como parâmetro e retorne apenas as pessoas do setor 
    de marketing que trabalham presencialmente.
 */

enum Departamento {
  marketing = "marketing",
  financeiro = "financeiro",
  vendas = "vendas",
}

type Colaborador = {
  nome: string;
  salario: number;
  departamento: Departamento;
  presencial: boolean;
};

let arrayColaboradores = [
  { nome: "Marcos", salario: 2500, departamento: Departamento.marketing, presencial: true },
  { nome: "Maria", salario: 1500, departamento: Departamento.vendas, presencial: false },
  { nome: "Salete", salario: 2200, departamento: Departamento.financeiro, presencial: true },
  { nome: "João", salario: 2800, departamento: Departamento.marketing, presencial: false },
  { nome: "Josué", salario: 5500, departamento: Departamento.financeiro, presencial: true },
  { nome: "Natalia", salario: 4700, departamento: Departamento.vendas, presencial: true },
  { nome: "Paola", salario: 3500, departamento: Departamento.marketing, presencial: true },
];

function colaboradorPresencial (arrayColaboradores:Colaborador[]):Colaborador[] {
  const colaborador:Colaborador[] = arrayColaboradores.filter((item:Colaborador) => {
    return item.departamento === Departamento.marketing && item.presencial === true
  })

  return colaborador
}

console.log(colaboradorPresencial(arrayColaboradores))
