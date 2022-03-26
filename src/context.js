import React, {useEffect, useContext, useReducer, createContext} from 'react';
import cartItems from './data';
import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = createContext()

const initialState = {
  cart: cartItems,
  total: 0,
  amount: 0,
  isLoading: false,
}

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }

  const increase = (id) => {
    dispatch({type: 'INCREASE', payload: id})
  }

  const decrease = (id) => {
    dispatch({type: 'DECREASE', payload: id})
  }

  const remove = (id) => {
    dispatch({type: 'REMOVE', payload: id})
  }

  const fetchData = async () => {
    dispatch({type: 'LOADING'})
    try {
      const response = await fetch(url)
      const data = await response.json()
      dispatch({type: 'FETCH_DATA_SUCCESS', payload: data})
    } catch (error) {
      dispatch({type: 'FETCH_DATA_FAILURE', paylod: error})
    }
  }

  const toggleAmount = (id, type) => {
    dispatch({type: 'TOGGLE_AMOUNT', payload: {id, type}})
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    dispatch({type: 'CALCULATE_TOTAL'})
  }, [state.cart])

  return (
    <AppContext.Provider value={{...state,clearCart,remove,increase,decrease,toggleAmount}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppProvider, AppContext}