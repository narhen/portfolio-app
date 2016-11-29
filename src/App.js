import React from 'react';
import { Navigation } from './components/Navigation';

export default props =>
  <div className="App">
    <Navigation />
    <div className={'mainContent'}>
      {props.children}
    </div>
  </div>;
