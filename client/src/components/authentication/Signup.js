import React, {useState, useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';



export const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { addUser } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newUser = {
            username,
            password
        }

        addUser(newUser);
    }
    
    return (
        <div>
            <h1>Create your account</h1>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label>firstname</label>
                    <input type="text" name="firstname" placeholder="First name..." />
                </div>
                <div className="form-control">
                    <label>lastname</label>
                    <input type="text" name="lastname" placeholder="Last name..." />
                </div>
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username..." required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password..." required/>
                </div>
                <button><a href="/pantry">Sign Up</a></button>
                <p>Already have an account? <strong><a href="/">Login</a></strong></p>
            </form>
        </div>
    )
}
