import React, { useState } from 'react';
import './AuthTabs.scss';
import {Login, Register} from '../index'
import backgroundImage from '../../../assets/images/background.jpg';

const AuthTabs = () => {
  const [type, setType] = useState('signin');

  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="environment">DEV</div>
      <div className="container-wrapper-auth">
        <div className="tabs">
          <div className="tabs-auth">
            <ul className="tab-group">
              <li
                className={`tab ${type === 'signin' ? 'active' : ''}`}
                onClick={() => setType('signin')}
              >
                <button className="login">Sign In</button>
              </li>
              <li
                className={`tab ${type === 'signup' ? 'active' : ''}`}
                onClick={() => setType('signup')}
              >
                <button className="signup">Sign Up</button>
              </li>
            </ul>

            {type === 'signin' && <div className="tab-item"><Login /></div>}
            {type === 'signup' && <div className="tab-item"><Register /></div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthTabs;
