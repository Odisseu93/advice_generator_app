import Api from "./services/api";
import React, { useEffect, useState } from 'react';
import { dice, pattern_divider_mobile } from "./components/images";


// requisição 
// https://axios-http.com/ptbr/docs/example
// const conselho = advice 

// Id_slip.textContent= JSON.stringify(conselho)




const getAdvice = () => {

  Api.get()
    .then((response) => {
      const { slip } = response.data;
      const { id } = slip;
      const { advice } = slip;
      console.log('id: ', id, '\n', 'advice: ', advice)

      const advice_id = document.querySelector('#advice_id');
      advice_id.textContent = '# ' + id;
      const advice_message = document.querySelector('#advice_message');
      advice_message.textContent = '"' + advice + '"';

    })
    .catch(console.error('error'))
}

function App() {
  
  return (
    <div className="App">
    {getAdvice()}

      <main className="main">
        <div className="advice">
          <div>
            <span className="advice-title">A D V I C E</span>
            <span className="advice-id" id="advice_id"></span>
          </div>
          <div>
            <span className="advice-message" id="advice_message"></span>
          </div>
          <div>
            {pattern_divider_mobile}
          </div>
          <div>
            <button onClick={getAdvice} className='advice-button' id="advice_button">
              {dice}
            </button>
          </div>
        </div>
      </main>

      {/* <footer className="footer">
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a> .
          <br />
          Coded by <a href="https://github.com/odisseu93" target={"_blank"}>Ulisses Silvério</a> .
        </div>
      </footer> */}
    </div>
  );
}

export default App;
