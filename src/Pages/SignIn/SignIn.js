import React from 'react';
import './SignIn.css'
function SignIn() {
  return (
    <>
       <div className='form-content-right'>
            <form className='form'>
                <h1 className='heading'>Sign In</h1>

                <div className='form-inputs'>
                    <label htmlFor='username' className='form-label'>Username</label>
                        <input id='username' type='text' name='username' className='form-input' placeholder='enter name' />
                </div>


                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'> Password</label>
                        <input type='password' name='password' className='form-input' placeholder='enter password' />
                </div>
                <button className='form-input-btn' type='submit'>Sign In</button>
                <span className='form-input-login'>
                   Don't have an account ? Create Account <a href='./SignUp'>Here</a> 
                </span>
            </form>
            
        </div>
    </>
  );
}

export default SignIn;
