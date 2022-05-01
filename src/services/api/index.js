// importação do axios
import axios from "axios";

// instânciação
const api = axios.create({
  //Random advice
  baseURL: 'https://api.adviceslip.com/advice'
})

api.get()
  .then((response) => {
    const { slip } = response.data;
    const { id } = slip;
    const { advice } = slip;
    console.log( 'id:',id, 'advice:', advice )
  })

export default api;