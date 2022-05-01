// importação do axios
import axios from "axios";

// instânciação
const Api = axios.create({
  //Random advice
  baseURL: 'https://api.adviceslip.com/advice'
})

export default Api;