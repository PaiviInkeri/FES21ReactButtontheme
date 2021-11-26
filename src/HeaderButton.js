import React from 'react';
//any component that uses the context needs to get ThemeContext imported
import ThemeContext from './ThemeContext';

function HeaderButton() {

  //we assign our context in a variable and use it to style the button element
  const themeContext = React.useContext(ThemeContext);

  return (
    <div>
      <button style={themeContext}>Press me</button>
    </div>
  );
}

export default HeaderButton;
