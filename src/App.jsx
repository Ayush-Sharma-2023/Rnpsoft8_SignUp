import { useState } from 'react';
import Navbar from './components/navbar.jsx';
import LanguageSelect from './components/Language_selection.jsx';
import Signup from './components/SignUp.jsx';
import Download from './components/download.jsx';
import Login from './components/login.jsx';

// goToDownload

function App() {
  
  const [showPage, setShowpage] = useState(false);
  const [showLogin, hideLogin] = useState(false);
  const [ showvideo, setshowvideo] = useState(false)
  const [ showLanguage, setshowLanguage] = useState(false)

  const handleLoginClick =() =>{
    hideLogin(true);
    showPage(true);
    

  };
  const handleSignClick =() =>{
    hideLogin(false);


  };

  const handleDownload =() =>{
    setshowLanguage(false);
    setShowpage(true);
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

      
      
      
      {/* {!showLanguageSelect && <Signup onLoginClick={handleLoginClick} />}  */}
      {/* {!showLanguageSelect && <Login onLoginClick={handleLoginClick} />}  */}
       {/* Needs to be optimesed later */}
      {showPage &&  <Navbar /> } 
      {showPage && !showvideo && showLanguage &&  <LanguageSelect goToDownload={handleDownload}/>}

      {/* This is temporary and need to be updated when we finish the design */}
      {showPage &&  showvideo && !showLanguage && <Download/>}

       
      
      
    </>
  );
}

export default App;
