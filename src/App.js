import React, {useState} from 'react'
import './App.scss';
import Home from './Component/Home';
import ogo from './img/ogo.png';

function App() {

  // const [show, setShow] = useState('');


  return (
    <div className="App h-full bg-[#7a1959]">
   <Home />
    {/* <button type='button' onClick={() => setShow('vscode')}><img className='w-[70px] rounded-lg bg-[#111116] bg absolute mt-7 mx-[650px] max-w-[900px]' src={ogo} alt='' /></button>
    <div className='w-full max-w-[900px] bg-[#7a1959] rounded-2xl mt-4 mx-auto h-20'> */}

    </div>
  );
}

export default App;
