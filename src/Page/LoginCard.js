import React, { useState, useEffect } from 'react';
import '../css/globals.css'; // Import your CSS styles
import '../css/styleguide.css'; // Import your CSS styles

function LoginCard({ setShowLogin, setShowSignUp }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState('');

    // To handle flash messages (success/error)
    const handleFlashMessages = () => {
        const params = new URLSearchParams(window.location.search);
        const error = params.get('error');
        const success = params.get('success');
        if (error) {
            alert(`Error: ${error}`);
        } else if (success) {
            alert(`Success: ${success}`);
        }
    };

    useEffect(() => {
        // Set current date
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear().toString().slice(2);
        setDate(`${day}/${month}/${year}`);
        handleFlashMessages();
    }, []);

    // Validation functions
    const validateUsername = (username) => /^[a-zA-Z][a-zA-Z0-9_-]{2,20}$/.test(username);
    const validatePassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#$!%*?&]{8,}$/.test(password);

    // Form submission handler
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateUsername(username) && validatePassword(password)) {
            console.log('Form submitted:', { username, password });
            // Submit form or perform action
        } else {
            alert('Invalid Username or Password');
        }
    };

    return (
        <div className="card-main">
            <div className="card-row">
                <div className="card-col">
                    <button className="button label" onClick={() => setShowLogin(false)}>
                        &lt; back
                    </button>
                    <div className="card-div"></div>
                </div>
                <div className="label date">{date}</div>
            </div>

            <div className="text-input">
                <form id="loginForm" onSubmit={handleSubmit}>
                    <div className="card-form-input">
                        <div className="label">USERNAME</div>
                        <input
                            className={`input-place-holder ${validateUsername(username) ? 'valid' : 'invalid'}`}
                            id="usernameLoginField"
                            name="username"
                            type="text"
                            maxLength="20"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="card-form-input">
                        <div className="label">PASSWORD</div>
                        <input
                            className={`input-place-holder ${validatePassword(password) ? 'valid' : 'invalid'}`}
                            id="passwordLoginField"
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button className="button-Default" type="submit" style={{ backgroundColor: 'var(--dark-blue)' }}>
                        Login
                    </button>

                    <button
                        id="ForgetPassword"
                        className="button label"
                        style={{ color: 'var(--red)' }}
                        type="button"
                        onClick={() =>
                            window.location.href =
                            'mailto:CyberArena@gmail.com?subject=ChangePassword&body=I%20forgot%20my%20password%20and%20would%20like%20to%20request%20a%20new%20one.'
                        }
                    >
                        Forgot password?
                    </button>

                    <p className="label">OR</p>

                    <button id="SignUp" className="button label" type="button" onClick={() => setShowSignUp(true)}>
                        Create your account, &nbsp; <span style={{ color: 'var(--red)' }}>SignUp</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginCard;
