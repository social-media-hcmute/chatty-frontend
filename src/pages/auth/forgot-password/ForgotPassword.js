import './ForgotPassword.scss';
import { FaArrowLeft } from "react-icons/fa";
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import { Link } from 'react-router-dom';
import backgroundImage from '../../../assets/images/background.jpg';
import { authService } from '../../../services/api/auth/auth.service';
import { useState } from 'react';

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert]= useState(false);
  const [alertType, setAlertType]= useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const forgotPassword = async (event)=>{
    setLoading(true);
    event.preventDefault();
    try {
      const response = await authService.forgotPassword(email);
      setLoading(false);
      setEmail('');
      setShowAlert(false);
      setAlertType('alert-success');
      setResponseMessage(response?.data?.message);

    }
    catch (error){
      setLoading(false);
      setShowAlert(true);
      setAlertType('alert-error');
            setResponseMessage(error?.response?.data?.message);
    }
  }
  return (
    <div className="container-wrapper" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container-wrapper-auth">
        <div className="tabs forgot-password-tabs" style={{ height: responseMessage ? '300px' : '' }}>
          <div className="tabs-auth">
            <ul className="tab-group">
              <li className="tab">
                <div className="login forgot-password">Forgot Password</div>
              </li>
            </ul>

            <div className="tab-item">
              <div className="auth-inner">
                {responseMessage && (
                  <div className={`alerts ${alertType}`}>
                    {responseMessage}
                  </div>
                )}

                <form className="forgot-password-form" onSubmit={forgotPassword}>
                  <div className="form-input-container">
                  <Input
                    id="email"
                    name="email"
                    type="text"
                    value={email}
                    labelText="Email"
                    placeholder="Enter Email"
                    style={{ border: showAlert ? '1px solid #fa9b8a' : '' }}
                    handleChange ={(e)=>setEmail(e.target.value)}
                  />
                  </div>

                  <Button label={`${loading ? 'FORGOT PASSWORD IN PROGRESS...' : 'FORGOT PASSWORD'}`} className="auth-button button" disabled={!email} />

                  <Link to={'/'}>
                    <span className="login">
                        <FaArrowLeft className="arrow-left" /> Back to Login
                    </span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
