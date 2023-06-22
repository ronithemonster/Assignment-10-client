import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
// import { useContext } from 'react';
// import { AuthContext } from '../Providers/AuthProvider';
// import { Navigate, useLocation } from 'react-router-dom';
// import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
if (loading) {
    return   <div
    style={{ width: "200px", height: "200px" }}
    className="w-100 d-flex text-[#DC2626] justify-content-center align-items-center"
  >
    {/* bootstrap spinner */}
    <Spinner
      animation="border"
      variant="danger"
      role="status"
      style={{ width: "4rem", height: "4rem" }}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
   
  </div>
    
}

    if (user) {
        return children;
        
    }

    return <Navigate state={{from: location}} to='/login' replace ></Navigate>
};

export default PrivateRoute;