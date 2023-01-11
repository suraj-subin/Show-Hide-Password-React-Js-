import React, { useState } from 'react'

const ShowAndHidePassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
        // console.log(e.target.value)
    }
    const handleClick = () => setShowPassword((show) => !show);
    return (
        <>
            <h1>ShowAndHidePassword </h1>
            <div className='img'>
            <input type={showPassword ? 'text' : 'password'} className="input" onChange={handlePasswordChange} value={passwordInput} name="password" placeholder="Password" />
            <div onClick={handleClick} className="BTN">
                {showPassword ? <i className="fa fa-eye" aria-hidden="true"></i> : <i className="fa fa-eye-slash" aria-hidden="true"></i>}
            </div>
            </div>
        </>
    )
}

export default ShowAndHidePassword;