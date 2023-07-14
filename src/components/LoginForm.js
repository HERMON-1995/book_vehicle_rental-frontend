import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import logo from '../../assets/logo.png';
import { toast } from 'react-toastify';
import { loginUser, registerUser } from '../redux/slices/userSlice';

const initialState = {
  username: '',
  password: '',
  isMember: true,
};

function LoginForm() {
  const [values, setValues] = useState(initialState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = values;
    if (!username || !password) {
      toast.error('Please fill out all Fields');
    } else if (values.isMember) {
      dispatch(loginUser({ username, password }));
    } else {
      dispatch(registerUser({ username, password }));
    }
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else {
      navigate('/register');
    }
  }, [user]);
  return (
    <div>
      {isLoggedIn ? (
        <p>Login successful! Redirecting...</p>
      ) : (
        <form onSubmit={onSubmit} className="form">
          <h3>{values.isMember ? 'Login' : 'Register'}</h3>
          <div className="form-row">
            {/* eslint-disable jsx-a11y/label-has-associated-control */}
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              value={values.username}
              name="username"
              onChange={handleChange}
              className="form-input"
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={values.password}
              name="password"
              onChange={handleChange}
              className="form-input"
            />
          </div>
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? 'Loading' : 'Submit'}
          </button>
          <p>
            {values.isMember ? 'Not a member yet?' : 'Already a member?'}
            <button type="button" onClick={toggleMember} className="member-btn">
              {values.isMember ? 'Register' : 'Login'}
            </button>
          </p>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
