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
    <div className="container mx-auto  mt-5 px-5 flex w-full">
      {isLoggedIn ? (
        <p>Login successful! Redirecting...</p>
      ) : (
        <form onSubmit={onSubmit} className="md:text-xl form flex flex-col gap-5 justify-center content-center items-center mt-24 w-full">
          <h3 className="text-center text-3xl ">{values.isMember ? 'Login' : 'Register'}</h3>
          <div className="w-full md:w-4/5 grid gap-5  lg:w-1/5">
            {/* eslint-disable jsx-a11y/label-has-associated-control */}
            <div className="form-control">
              <label className="input-group input-group-vertical">
                <span>Username</span>
                <input
                  type="text"
                  value={values.username}
                  name="username"
                  onChange={handleChange}
                  className="input input-bordered focus:outline-none"
                />
              </label>
            </div>
            <label className="input-group input-group-vertical">
              <span>Password</span>
              <input
                type="password"
                value={values.password}
                name="password"
                onChange={handleChange}
                className="input input-bordered focus:outline-none"
              />
            </label>
            <button type="submit" className="btn btn-block" disabled={isLoading}>
              {isLoading ? 'Loading' : 'Submit'}
            </button>
          </div>
          <p className="text-center">
            {values.isMember ? 'Not a member yet? ' : 'Already a member? '}
            <button type="button" onClick={toggleMember} className="link link-success">
              {values.isMember ? 'Register' : 'Login'}
            </button>
          </p>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
