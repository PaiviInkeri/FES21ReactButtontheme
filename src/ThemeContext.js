import React from 'react';

const ThemeContext = React.createContext({theme: {}});
//{theme: {}} kuten kalvoissa
//suluissa oli 'blue'
//here we create a context called ThemeContext, that can be used
//in other components

export default ThemeContext;
