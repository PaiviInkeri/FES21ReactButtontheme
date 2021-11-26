import React, { useEffect } from 'react';
//importing Header which is rendered here in the return statement
import Header from './Header';
//remember to import the context
import ThemeContext from './ThemeContext'; 

export const buttonThemes = {
  blue: {
    color: 'white',
    backgroundColor: 'blue'
  },
  black: {
    color: 'white',
    backgroundColor: 'black'
  },
};

function App() {

  //using context provider to pass theme inside the component tree
  const [theme, setTheme] = React.useState({theme: {}});

  useEffect(() => setTheme({theme: {buttonThemes: 'blue'}}), []);
  //'blue' pitää ehkä olla kaarisuluissa?

  return (
    //passing the context to the next component
    <ThemeContext.Provider value= {theme}>
       <Header />
    </ThemeContext.Provider>
   
  );
}

export default App;
