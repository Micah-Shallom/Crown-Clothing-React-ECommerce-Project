import React, { Component, useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js'

import { SignInTitle , SignInContainer, ButtonsContainer } from './sign-in.styles.js'

const SignIn = () => {
 
  const [userCredentials , setCredentials] = useState({
    email : '',
    password: ''
  })

 const  handleSubmit = async event => {
    event.preventDefault();
    const { email , password} = userCredentials;

    try {
      await auth.signInWithEmailAndPassword(email , password)
      setCredentials({
        email : '',
        password : ''
      })
    } catch (e) {
      console.error(e);
    }

  }
 const  handleChange = event => {
    const {value , name} = event.target;

    setCredentials({
      ...userCredentials,
      [name] : value
    })
  }
  
    return (
      <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      
      <form onSubmit={handleSubmit}>

        <FormInput
        type="email" 
        name='email' 
        value={userCredentials.email} 
        handleChange={handleChange}
        label = 'email'
        required/>

        <FormInput
        type="password" 
        name='password' 
        value={userCredentials.password} 
        handleChange={handleChange}
        label = 'password'
        required/>

        <ButtonsContainer>
        <CustomButton type="submit">
          Sign In
        </CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
          Sign In With Google
        </CustomButton>
        </ButtonsContainer>
      </form>
        
      </SignInContainer>
    )
  }

export default SignIn;
