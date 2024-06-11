import { useState } from 'react';
import Navbar from './components/navbar.jsx';
import LanguageSelect from './components/Language_selection.jsx';
import Signup from './components/SignUp.jsx';
import Download from './components/download.jsx';

function App() {
  const [showLanguageSelect, setShowLanguageSelect] = useState(false);

  const handleContinueClick = () => {
    setShowLanguageSelect(true);
  };

  return (
    <>
           
      {!showLanguageSelect && <Signup onContinueClick={handleContinueClick} />}
      {showLanguageSelect && <Navbar /> } 
      {showLanguageSelect && <LanguageSelect />}

      {/* This is temporary and need to be updated when we finish the design */}
      {showLanguageSelect && <Download/>}

       
      
      
    </>
  );
}

export default App;
