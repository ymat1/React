import { useState } from "react";

function Login() {
    return(
        <>
            <form>
                <div className="p-5 m-5 position-absolute top-0 end-0 border border-success rounded-2">
                    <h5>Login</h5>
                    <label htmlFor='userName'>Username:</label>
                        <input type='text' name='userName' id='userName' className='form-control mb-3'></input>
                    <label htmlFor='passWord'>Password:</label>
                        <input type='password' name='passWord' id='passWord' className='form-control mb-3'></input>
                    <div className='mb-3'>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' name='rememberMe' id='rememberMe' value='Remember Me' />
                            <label className='form-check-label' htmlFor='rememberMe'>Remember Me</label>
                        </div>
                    </div>
                    <button className='btn btn-success d-block w-100'>Log In</button>
                </div>
            </form>
        </>
    )
}

export default Login;