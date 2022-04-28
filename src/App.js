// importação do axios
import axios from "axios";

// instânciação
const api = axios.create({
  //Random advice
  baseURL: 'https://api.adviceslip.com/advice'
})


// requisição 
//https://axios-http.com/ptbr/docs/example
api.get('').then((Response)=>{
  console.log(Response)
})


function App() {
  
  return (
    <div className="App">
      <body>
        Advice

        {/* #<!-- Advice ID goes here -->

"<!-- Advice text goes here -->" */}


        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </div>
      </body>
    </div>
  );
}

export default App;
