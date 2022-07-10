// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React,{ useContext} from 'react'
import { Navigate, Route, Outlet } from 'react-router-dom'
import { AxiosContext } from './useApi';
import jwt_decode from "jwt-decode";


const PrivateRoutes = ({ component: Component, ...rest }) => {
  const isLoggedIn = () => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      return true
    }
    return false;
  };
  return (
   isLoggedIn() ? ( <Outlet/>) : (<Navigate to="/auth" />)
  )
}

export default PrivateRoutes;