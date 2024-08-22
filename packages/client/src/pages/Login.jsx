import React, { useState } from 'react';
import {useFormStatus} from 'react-dom';

function login(formData) {
  const user = formData.get('user');
  const password = formData.get('password');
  alert(`Logging in with, ${user} ${password}`)
}

export default function Login () {
  return (
    <>
      <h1>Login</h1>
      <div>
        <form action='/login' method='POST'>
          <input
            type='text'
            name='username'/>
          <br />
          <input
            type='text'
            name='password'/>
            <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}
