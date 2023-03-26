import React,{useState} from 'react' ;
import './LogIn.scss';
import {NavLink} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const LogIn=()=>{
    const [input,setInput]=useState({
        email:"",
        password:"",
      });
      const navigate=useNavigate();
      const handleLogIn=(e)=>{
        e.preventDefault();
        const loggeduser=JSON.parse(localStorage.getItem('user'));
        if(input.email===loggeduser.email &&
           input.password===loggeduser.password)
        {
         navigate("/");
        }
        else{
            alert ('Wrong email or Paasword')
        }
      };
    return(
        <div className='navbar'>
        <div className='wrapper'>
            <h1>Welcome to MadColors<br></br><p> Shopping is always a good idea...</p></h1>
        <div className='login'>
            <h4>Mad Colors</h4>
            <h3>Log In</h3>
            <form action=""  onSubmit={handleLogIn}>
                <div className='email'>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder='Enter you email' value={input.email}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
                </div>
                <div className='passw'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' placeholder='Enter you password' value={input.password}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
                </div>
                <button type='submit'>Log In</button>
            </form>
            <p className='bottom'>You don't have an account? <NavLink to='/register'>Create Account</NavLink></p>
            </div>
        </div>
        </div>
    )
}
export default LogIn;