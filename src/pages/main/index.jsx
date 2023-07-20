import React from 'react'
import ListProducts from '../../components/list-products';

import { signOut } from 'firebase/auth'
import { auth } from '../../App';

const Main = () => {

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <div>
        <h1>Backoffice</h1>
        <button onClick={handleSignOut}>Salir</button>
        <ListProducts />
    </div>
  )
}

export default Main;