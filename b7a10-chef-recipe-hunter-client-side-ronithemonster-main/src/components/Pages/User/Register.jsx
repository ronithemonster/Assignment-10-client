import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';


const Register = () => {
    const{createUser} = useContext(AuthContext);
   
    const [error, setError] = useState('');
    const [success,setSuccess] = useState('')


    const handleCreateUser =(event)=>{
        event.preventDefault();
      
      
        const form = event.target;
        const userName = form.username.value;
        const url = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password,userName,url);

        if (password.length < 6) {
            setError('The password is less than 6 characters')
            
        }


        createUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
           console.log(loggedUser);
           setSuccess('successfully logged in')
            form.reset()
            setError('')
          
        })
        .catch(error=>{
           setError(error.message);
        })

      
      }

    return (
        <div>
            <h2> this is register </h2>
            <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center mb-4">Signup</h3>
              <form onSubmit={handleCreateUser}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" name="username"  placeholder="Enter username" required />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Photo URL</label>
                  <input type="text" className="form-control" name="photo" placeholder="Enter Photo URL" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" name="email" placeholder="Enter email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input  type="password" className="form-control" name="password" placeholder="Password"  required/>
                  <p className="text-danger"><small>{error}</small></p>
                  <p className="text-success"><small>{success}</small></p>
                  
                </div>
               
                <Button variant="primary" type="submit" className="btn-block mb-3 mt-3 ">
                  Signup
                </Button>
              </form>
              <p><small>New here? Click here <Link to={'/login'} > to login </Link> </small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Register;