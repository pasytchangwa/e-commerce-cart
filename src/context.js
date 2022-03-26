import React, {useState, useEffect, useContext, createContext} from 'react'

const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = createContext()

const AppProvider = () => {
  const [cart, setCart] = useState([])

  return (
   <AppContext.Provider>

   </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppProvider, AppContext}