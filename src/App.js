import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ?? 'dark' }>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Home darkMode={darkMode}/>
    </div>
  );
}

export default App;
