import React, { useEffect, useState } from 'react';
import '@pages/auth/auth-tabs/AuthTabs.scss';
import backgroundImage from '@assets/images/background.jpg';
import Login from '@pages/auth/login/Login';
import Register from '@pages/auth/register/Register';
import useLocalStorage from '@hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { Utils } from '@services/utils/utils.service';

const AuthTabs = () => {
  const [type, setType] = useState('signin');
  const keepLoggedIn= useLocalStorage('keepLoggedIn','get');
  const [environment, setEnvironment]=useState('');
  const navigate=useNavigate();

  useEffect(()=>{
    const env =Utils.appEnvironment();
    setEnvironment(env);
    if(keepLoggedIn) navigate('/app/social/streams');
  },[keepLoggedIn,navigate])

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
