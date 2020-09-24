import React from 'react';

import Button from 'react-bootstrap/Button';

export const Login = () => {
    return (

        <div>
            <h1>Login to get started</h1>
            <form>
                <div className="form-control">
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username..." required />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password..." required />
                </div>
                <Button >Log In</Button>
            </form>
            <p>Don't have an account? <strong><a href="/register">Sign up for free</a></strong></p>
        </div>
    )
}