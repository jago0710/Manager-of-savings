import Logger from './Logger.js'
import './App.css';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className='w-11/12 m-auto bg-scroll'>
      <Navbar></Navbar>
      <Logger value="Hola"></Logger>
    </div>
  );
}

export default App;
