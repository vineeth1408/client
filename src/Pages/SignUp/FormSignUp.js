import {React, useState} from 'react'
import { useHistory } from 'react-router';
import './SignUp.css';


const FormSignUp = () => {
    const history=useHistory();

    const [user,setUser]=useState({
        username:"",
        email:"",
        password:"",
        password2:""
    });

    let name,value;

    const handleInputs =(e) =>{
        console.log(e)
        name=e.target.username;
        value=e.target.value;
        setUser({...user, [name]:value});
    }
const PostData = async(e)=>{

    e.preventDefault();
    const {username, email,password,password2}=user;
    const res= await fetch('/register',{
        method:'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            username, email,password,password2
        })
    });
    const data = await res.json();
    if(data.status ==422 || !data){
        window.alert('Invalid registrsion');
    }else{
        window.alert('Successfull registration');

        history.pushState('/SignIn');
    }
}
    return (

        <div className='form-content-right'>
            <form method='POST' className='form'>
                <h1 className='heading'>Sign Up Here</h1>

                <div className='form-inputs'>
                    <label htmlFor='username' className='form-label'>Username</label>
                        <input id='username' type='text' name='username' className='form-input' placeholder='enter name'
                                value={user.username}
                                onChange={handleInputs}
                        />
                </div>

                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>E-mail </label>
                        <input id='email' type='text' name='email' className='form-input' placeholder='enter email'
                                value={user.email}
                                onChange={handleInputs}
                        />
                </div>

                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'> Password</label>
                        <input type='password' name='password' className='form-input' placeholder='enter password'
                                value={user.password}
                                onChange={handleInputs}
                        />
                </div>

                <div className='form-inputs'>
                    <label htmlFor='password2' className='form-label'> Confirm Password</label>
                        <input type='password2' name='password2' className='form-input' placeholder='confirm password'
                                value={user.password2}
                                onChange={handleInputs}
                        />
                </div>

                <button className='form-input-btn' type='submit' value='register' onClick={PostData}>Sign up</button>
                <span className='form-input-login'>
                    Already have an account? login <a href='./SignIn'>Here</a> 
                </span>
            </form>
            
        </div>
    )
}

export default FormSignUp
