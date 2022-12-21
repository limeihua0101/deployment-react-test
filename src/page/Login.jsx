import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const ubuntu_ssh_key = process.env.REACT_APP_UBUNTU_SSH_KEY;
    console.log(`REACT_APP_UBUNTU_SSH_KEY   === ${ubuntu_ssh_key}`);

    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        userId: '',
        password: '',
    });

    const handleInputChange = (target) => {
        const { name, value } = target;

        switch (name) {
            case 'userId':
                return setUserInfo({
                    ...userInfo,
                    userId: value,
                });
            case 'password':
                return setUserInfo({
                    ...userInfo,
                    password: value,
                });
            default:
        }
    };

    const handleLogin = () => {
        navigate('/home');
    };
    return (
        <div>
            <h1>Login Page </h1>
            <h1>GITHUB ACTION DEPLOYMENT TEST</h1>
            <h1>github action connection ubuntu server !!!</h1>
            <form action="">
                <input
                    type="text"
                    value={userInfo.userId}
                    name="userId"
                    placeholder="userId"
                    onChange={(e) => handleInputChange(e.target)}
                />
                <input
                    type="password"
                    value={userInfo.password}
                    name="password"
                    placeholder="password"
                    onChange={(e) => handleInputChange(e.target)}
                />
            </form>
            <button onClick={handleLogin}>Login</button>
            {/* <Link to="/home">go to Home</Link> */}
        </div>
    );
};
