import React, { useState } from 'react';
import qs from 'query-string';

function login(formData) {
  const user = formData.get('user');
  const password = formData.get('password');
  alert(`Logging in with, ${user} ${password}`)
}

const errorCodes = {
  401: 'User not found',
  403: 'Incorrect Credentials'
};

export function Login () {
  const querystring = qs.parse(location.search);

  const error = querystring.error && (
    <p className='red'>{ errorCodes[querystring.error] }</p>
  );

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
        { error }
      </div>
    </>
  )
}

export function Logout() {
  return (
    <a href='/logout'>Logout</a>
  )
}
