import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = (): React.ReactElement => {
  return (
    <nav>
      <Link to="/">
        <h1>Herocarina</h1>
      </Link>
    </nav>
  );
}

export default Navbar;
