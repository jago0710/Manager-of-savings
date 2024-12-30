import Logger from './Logger.js'
import './App.css';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className='w-11/12 m-auto bg-scroll'>
      <Navbar></Navbar>
      <Logger username="Joel"></Logger>
    </div>
  );
}

export default App;
