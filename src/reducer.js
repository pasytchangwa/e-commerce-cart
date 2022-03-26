
const reducer = (state, action) => {
  switch(action.type) {
    case 'CLEAR_CART':
      return {
        ...state, cart: []
      }
    case 'INCREASE':
      let tempCart = state.cart.map(item => {
        if (item.id === action.payload) {
          return {...item, amount: item.amount + 1}
        }
          return item
      })
      return {
        ...state, cart: tempCart
      }
      case 'DECREASE':
        let tempCart2 = state.cart.map(item => {
        if (item.id === action.payload) {
          return {...item, amount: item.amount - 1}
        }
          return item
      })
      .filter((item) => item.amount !== 0)
      return {
        ...state, cart: tempCart2
      }
      case 'REMOVE':
      let tempCart3 = state.cart.filter(item => item.id !== action.payload)
      return {
        ...state, cart: tempCart3
      }
      case 'CALCULATE_TOTAL':
      let {total, amount} = state.cart.reduce((cartTotal, item) => {
        const {price, amount} = item
        const itemTotal = price * amount
        cartTotal.total += itemTotal
        cartTotal.amount += amount
        return cartTotal
      }, {total: 0, amount: 0})
      total =parseFloat(total.toFixed(2))
      return {
        ...state, total, amount
      }
      case 'TOGGLE_AMOUNT':
      let tempCart4 = state.cart.map(item => {
        if (item.id === action.payload.id) {
          if (action.payload.type === 'inc') {
            return {...item, amount: item.amount + 1}
          }
          if (action.payload.type === 'dec') {
            return {...item, amount: item.amount - 1}
          }
        }
        return item
      })
      .filter((item) => item.amount !== 0)
      return {
        ...state, cart: tempCart4
      }
      case 'LOADING':
      return {
        ...state, isLoading: true
      }
      case 'FETCH_DATA_SUCCESS':
      return {
        ...state, isLoading: false, cart: action.payload
      }
      case 'FETCH_DATA_FAILURE':
      return {
        ...state, isLoading: false, error: action.payload
      }
    default:
      return state
  }

}

export default reducer;

