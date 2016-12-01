import React from 'react';
import { Link } from 'react-router';

export const Navigation = () =>
  (<header>
    <div className="nav">
      <ul>
        <li className="home"><Link to={'/'}>Home</Link></li>
        <li className="quotes"><Link to={'/portfolio'}>Portfolio</Link></li>
        <li className="quotes"><Link to={'/deposits'}>Deposits</Link></li>
      </ul>
    </div>
  </header>);
