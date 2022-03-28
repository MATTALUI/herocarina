import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = (): React.ReactElement => {
  return (
    <nav>
      <Link to="/" className="logo">Herocarina</Link>
    </nav>
  );
}

export default Navbar;
