import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Services from './component/Services';
import Aboutus from './component/Aboutus';
import Contactus from './component/Contacus';

function App() {
  return (
    
    <div className="App">
        
        <Navbar />
        <div id="home"><Home /></div>
        <div id="services"><Services /></div>
        <div id="aboutus"><Aboutus /></div>
        <div id="contactus"><Contactus /> </div>     
    </div>
  );
}

export default App;
