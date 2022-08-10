
function reverterTexto (texto:string):string {
  return texto.split("").reverse().join("")
}
console.log(reverterTexto("paralelepipedo"))