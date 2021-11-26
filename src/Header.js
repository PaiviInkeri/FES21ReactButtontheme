import React from 'react';
//importing HeaderButton component which is then rendered here
//(first app.js renders Header)
//Header doesn´t need our context so it doesn´t appear here
import HeaderButton from './HeaderButton';

function Header() {
  return (
    <div>
      <HeaderButton />
    </div>
  );
}

export default Header;