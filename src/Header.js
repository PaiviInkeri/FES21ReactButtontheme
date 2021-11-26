import React from 'react';
//importing HeaderButton component which is then rendered here
//(first app.js renders Header)
import HeaderButton from './HeaderButton';

function Header() {
  return (
    <div>
      <HeaderButton />
      hello
    </div>
  );
}

export default Header;