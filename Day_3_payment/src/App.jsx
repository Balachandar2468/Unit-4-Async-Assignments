import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
      <div id="box">
      <div id='logo_box'>
      <img alt='amazon' src='https://s3-symbol-logo.tradingview.com/amazon--600.png'></img>
      </div>
      <div id='date'>
      <h4>16/04/2022</h4>
      </div>
      <div id='case'>
      <h4 style={{marginTop:`5px`,color:`white`}}>Case Study</h4>
      </div>
      <div id='Title'>
      <h2 style={{marginTop:`5px`,color:`black`}}>AMAZON GIFT PAY</h2>
      </div>
      <div id='device'>
              <h4 style={{marginTop:`0px`,color:`black`}}>Desktop - Mobile</h4>
              </div>
              <div id='arrow'>
              <h4 style={{marginTop:`0px`,color:`black`}}>Push-It</h4>
              </div>


      </div>
      </header>
    </div>
  )
}

export default App
