import React from 'react'
import Navbar from './component/Navbar';
import CartContainer from './component/CartContainer';
import { useGlobalContext } from './context';

const App = () => {
  const {loading} = useGlobalContext();

  if(loading) {
    return <div className='loading'>loading...</div>
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App

