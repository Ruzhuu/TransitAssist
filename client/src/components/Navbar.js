import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (

    <div>
      {
        isAuthenticated ? (
          <div>
            <button
              className='p-3 m-3 bg-red-600'
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button>
          </div>
        ) : (
          <button
            className='p-3 m-3 bg-green-600'
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        )
      }
    </div>
  )
}

export default Navbar