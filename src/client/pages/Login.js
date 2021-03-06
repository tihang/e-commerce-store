import React, { useState, useEffect } from 'react';
import EmailValidator from 'email-validator';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { userLogin, resetErrorandSuccess } from '../redux';
import LoadingSubmitButton from '../components/LoadingSubmitButton';
import ThemeButton from '../components/ThemeButton';

function Login({
  isLoading, login, loggedIn, error, success, resetErrAndSscc
}) {
  // State to save user form info
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    errors: {
      email: '',
      password: ''
    }
  });


  // Flash error if error
  useEffect(() => {
    if (error.length > 0) {
      toast.error(error);
    }
    return () => {
      resetErrAndSscc();
    };
  }, [error]);

  useEffect(() => {
    if (success.length > 0) {
      toast.success('Logged in');
    }
    return () => {
      resetErrAndSscc();
    };
  }, [success]);

  // Handle login submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = {
      email: userInfo.name,
      password: userInfo.password
    };
    login(loginData);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const { errors } = userInfo;

    switch (name) {
      case 'email':
        errors.email = EmailValidator.validate(value) ? '' : 'Invalid Email';
        break;

      case 'password':
        errors.password = value.length > 5 ? '' : 'Password must be 6 characters long';
        break;

      default:
        break;
    }

    setUserInfo({
      ...userInfo,
      errors
    });
  };

  // Redirects user to dashboard if logged in
  if (loggedIn) {
    return <Redirect to="/dashboard" />;
  }


  return (
    <div className="login-page">
      <h2>Log In</h2>
      <form
        className="form-component"
        onSubmit={handleSubmit}
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
          onBlur={handleChange}
        />
        <p className="form-input-error">{userInfo.errors.email}</p>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={e => setUserInfo({ ...userInfo, password: e.target.value })}
          onBlur={handleChange}
        />
        <p className="form-input-error">{userInfo.errors.password}</p>
        <p className="agreement-notice">
          By clicking &apos;Log In&apos; you agree to our Privacy Notice and Terms & Conditions.
        </p>
        <LoadingSubmitButton isLoading={isLoading} displayText="Log In" />
      </form>

      <h6>Don&apos;t have an account?</h6>
      <NavLink to="/register">
        <ThemeButton displayText="Register" />
      </NavLink>
    </div>
  );
}

Login.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  success: PropTypes.string.isRequired,
  resetErrAndSscc: PropTypes.func.isRequired
};

const mapStatetoProps = state => ({
  isLoading: state.user.loading,
  loggedIn: state.user.loggedIn,
  error: state.user.error,
  success: state.user.success,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: loginData => dispatch(userLogin(loginData, ownProps)),
  resetErrAndSscc: () => dispatch(resetErrorandSuccess())
});

export default connect(mapStatetoProps, mapDispatchToProps)(Login);
