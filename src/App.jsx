import { useState } from 'react';
import Navbar from './components/navbar.jsx';
import LanguageSelect from './components/Language_selection.jsx';
import Signup from './components/SignUp.jsx';
import Download from './components/download.jsx';
import Login from './components/login.jsx';

// goToDownload


function App() {
  
  const [showPage, setShowpage] = useState(false);  
  const [showLogin, setShowLogin] = useState(false);
  const [ showvideo, setshowvideo] = useState(false)
  const [ showLanguage, setshowLanguage] = useState(false)

  const handleLoginClick =() =>{
    setShowLogin(true);
    // showPage(true);
    

  };
  const handleSignClick =() =>{
    setShowLogin(false);


  };

  const handleDownload =() =>{
    setshowLanguage(false);
    
    setshowvideo(true);
  };



  const handleContinueClick = () => {
    setShowpage(true);
    setshowLanguage(true);
    setshowvideo(false);

  };

  return (
    <>
    
    
           
      {!showLogin  && !showPage && <Signup onLoginClick={handleLoginClick} onContinueClick={handleContinueClick}   /> }
      {showLogin   && !showPage && <Login  onLoginClick={handleSignClick}  onContinueClick={handleContinueClick} /> }

      
      
      
      {showPage &&  <Navbar /> } 
      {showPage && !showvideo && showLanguage && <LanguageSelect goToDownload={handleDownload}/>}

      {showPage &&  showvideo && !showLanguage && <Download/>}

       
      
      
    </>
  );
}

export default App;
