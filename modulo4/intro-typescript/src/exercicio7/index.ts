function converteDNAEmRNA (dna:string): string {
  let rna:string = ""
  for (let letra of dna) {
    if(letra === "A" ) {
      rna += "U"
    } else if(letra === 'T') {
      rna += "A"
    } else if(letra === 'C') {
      rna += "G"
    } else if(letra === 'G') {
      rna += "C"
    }
  }
  return rna
}

console.log(converteDNAEmRNA("ATTGCTGCGCATTAACGACGCGTA"))