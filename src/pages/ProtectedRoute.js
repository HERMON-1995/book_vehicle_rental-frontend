import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/register" />;
  }
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
