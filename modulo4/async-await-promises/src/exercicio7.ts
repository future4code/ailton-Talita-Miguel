/**
 * - Desafios
    
    O desafio é: você deve criar uma arrow function assíncrona que imprima a mensagem "Oi" 
    no terminal depois de 5 segundo a partir do momento em que o script foi rodado. 

 */

const oi = () => {
  console.log("Oi!!!")
}

const message = async ():Promise<any> => {
  console.log("Após 5 segundo")
  return new Promise(() => {
    setTimeout(oi, 5000);
  })
}

message()