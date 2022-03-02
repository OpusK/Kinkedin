import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { login } from './features/userSlice';
import "./Login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    // https://firebase.google.com/docs/auth/web/password-auth#sign_in_a_user_with_an_email_address_and_password
    signInWithEmailAndPassword(getAuth(), email, password)
    .then((userCredential) => {
      dispatch(
        login({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: userCredential.user.displayName,
          photoUrl: userCredential.user.photoUrl,
        })        
      );
    })
    .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert('Please enter a full name!');
    }

    // https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
    createUserWithEmailAndPassword(getAuth(), email, password)
    .then((userCredential) => {
      // https://firebase.google.com/docs/auth/web/manage-users#update_a_users_profile
      updateProfile(userCredential.user, {
        displayName: name,
        photoURL: profilePic,
      })
      .then(() => {
        dispatch(
          login({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            displayName: name,
            photoUrl: profilePic,
          })
        );
      });
    })
    .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img
        src="https://www.pikpng.com/pngl/b/53-533354_linkedin-logo-transparent-png-linkedin-logo-png-clipart.png"
        alt=""
      />

      <form>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email" type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <button type="submit" onClick={loginToApp}>Sign in</button>
      </form>

      <p>Not a member?{" "}
        <span className="login__register" onClick={register}>
          Registor Now
        </span>
      </p>
    </div>
  );
}

export default Login;
