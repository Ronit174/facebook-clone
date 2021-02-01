import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    
    const [state, dispatch] = useStateValue();

    const signIn = () => (
        auth.signInWithPopup(provider)
        .then((result) => {
           
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
         })
        .catch(error => alert(error.message))
    );
    return (
        <div className="login">
            <div className="login_logo">
                <img 
                src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png"
                alt="" />

                <img 
                src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                alt="" />

            </div>

            <Button type="submit" onClick={signIn}>
               Sign In
            </Button>
        </div>
    )
}

export default Login
