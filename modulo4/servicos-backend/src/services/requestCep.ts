import axios from 'axios'

export const requestCep = async(cep:string) => {
  try {
    console.log("aaaa")
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    return result.data

  } catch (error:any) {
    return null
  }
}