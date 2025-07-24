import React from 'react';
import ReactDOM from 'react-dom/client';
import LogoAndName from './LogoAndName';
import Navbar from './Navbar';
import './index.css';
import Home from './Home';
import Aboutus from './Aboutus';
import Representatives from './Representatives';
import Contactus from './Contactus';
function App() {
  return (
    <>  
      <header className="header">
        <LogoAndName />
        <Navbar />
      </header>

      <main className="content">
        <Home/>
        <Aboutus />
        <Representatives/>
        <Contactus/>
      </main>
    </>
  );
}

export default App;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);