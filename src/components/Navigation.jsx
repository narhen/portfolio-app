import React from 'react';
import { Link } from 'react-router';

export const Navigation = () =>
  (<header>
    <div className="nav">
      <ul>
        <li className="navBarLeftAlign"><Link to={'/'}>Home</Link></li>
        <li className="navBarLeftAlign"><Link to={'/portfolio'}>Portfolio</Link></li>
        <li className="navBarLeftAlign"><Link to={'/deposits'}>Deposits</Link></li>
        <li className="navBarRightAlign"><Link to={'/login'}>Login</Link></li>
      </ul>
    </div>
  </header>);
