// react
import { createContext, useState } from 'react';

// components
import Board from './components/react/board';
// import Mode from './components/react/mode';

// stylesheets
import './components/styles/leaderboard.scss';

export const ThemeContext = createContext(null);

function App() {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const modePreference = prefersDarkMode ? 'dark' : 'light';
  
  const [theme, setTheme] = useState(modePreference);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App main" id={theme}>
        <Board></Board>
        <ToggleThemeButton />
      </div>
    </ThemeContext.Provider>
  );
}

function ToggleThemeButton() {
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        // <button onClick={toggleTheme} className='themeSwitch'>
        //   <img src='https://www.svgrepo.com/show/445683/dark-mode.svg'/>
        // </button>
        <img src ='https://www.svgrepo.com/show/445683/dark-mode.svg' className='themeSwitch' onClick={toggleTheme} />
      )}
    </ThemeContext.Consumer>
  )
}

export default App;
