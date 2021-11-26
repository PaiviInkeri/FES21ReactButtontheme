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

  return (
    //passing the context to the next component with ThemeContext.Provider
    //here we can change the context {buttonThemes.black} or {buttonThemes.blue}
    //value could also be dynamic
    <ThemeContext.Provider value= {buttonThemes.black}>
       <Header />
    </ThemeContext.Provider>
   
  );
}

export default App;
