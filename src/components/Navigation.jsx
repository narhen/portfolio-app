import React from 'react';
import { Link } from 'react-router';
import { Login } from './login/Login';

export const Navigation = () =>
  (<header>
    <div className="nav">
      <ul>
        <li className="navBarLeftAlign"><Link to={'/'}>Home</Link></li>
        <li className="navBarLeftAlign"><Link to={'/portfolio'}>Summary</Link></li>
        <li className="navBarLeftAlign"><Link to={'/portfolio/history'}>History</Link></li>
        <li className="navBarLeftAlign"><Link to={'/portfolio/deposits'}>Deposits</Link></li>
        <li className="navBarRightAlign"><Login /></li>
      </ul>
    </div>
  </header>);
