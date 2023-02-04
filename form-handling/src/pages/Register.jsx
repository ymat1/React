import { useState } from 'react';

const Register = () => {
    // First Name, Last Name, Username, Password, Gender, Tech Stack

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        gender: '',
        techstack: []
    })

    const handleOnChange = (event) => {
        if(event.target.name === 'techstack') {
            let copy = {...formData}
            
            if(event.target.checked) {
                copy.techstack.push(event.target.value)
            }else{
                copy.techstack = copy.techstack.filter(el => el !== event.target.value)
            }
            setFormData(copy)
        }else{
            setFormData(() => ({
                ...formData,
                [event.target.name] : event.target.value
            }))
        }
    }
    const submitForm = (event) => {
        event.preventDefault()
        console.log(formData)
    }
    return(
        <>
            <form>
                <div className='p-5 m-5 border border-primary rounded-2'>
                    <h5>Register</h5>
                    <label htmlFor='firstName'>First Name:</label>
                        <input type='text' name='firstName' id='firstName' className='form-control mb-3' onChange={handleOnChange}></input>
                    <label htmlFor='lastName'>Last Name:</label>
                        <input type='text' name='lastName' id='lastName' className='form-control mb-3' onChange={handleOnChange}></input>
                    <label htmlFor='username'>Username:</label>
                        <input type='text' name='username' id='username' className='form-control mb-3' onChange={handleOnChange}></input>
                    <label htmlFor='password'>Password:</label>
                        <input type='password' name='password' id='password' className='form-control mb-3' onChange={handleOnChange}></input>
                    <label htmlFor='gender'>Gender:</label>
                    <select className='form-control mb-3' name='gender' id='gender' onChange={handleOnChange}>
                        <option value='Prefer not to say'>Prefer not to say</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                    </select>
                    <div className='mb-3'>
                        <h6>Tech Stack:</h6>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' name='techstack' id='html' value='HTML' onChange={handleOnChange} />
                            <label className='form-check-label' htmlFor='techstack'>HTML</label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' name='techstack' id='css' value='CSS' onChange={handleOnChange} />
                            <label className='form-check-label' htmlFor='techstack'>CSS</label>
                        </div>
                        <div className='form-check'>
                            <input className='form-check-input' type='checkbox' name='techstack' id='js' value='JavaScript' onChange={handleOnChange} />
                            <label className='form-check-label' htmlFor='techstack'>JavaScript</label>
                        </div>
                    </div>
                    <button onClick={submitForm} className='btn btn-success d-block w-100'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default Register;