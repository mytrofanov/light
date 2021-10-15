import './App.css';



function App() {
 function StartStop() {
     let se
 }

    return (
<div className='frame'>
<div className='screen'>
<div id='Minutes' className='time'>00</div>
<div id='Seconds' className='time' >00</div>
<div id='Miliseconds' className='time'>00</div>

</div>

<div className='buttons'>
<button className='controlButtons' onClick={StartStop()}>Start/Stop</button>
<button className='controlButtons'>Wait</button>
<button className='controlButtons'>Reset</button>

</div>

        </div>
)}


export default App;
