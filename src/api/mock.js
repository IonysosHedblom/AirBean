import json from './menu.json'
import { v4 as uuid } from 'uuid'

export async function fetchProducts() {
  // Resolve the products from menu.json after a random timer
  let data = json.menu

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

export async function registerUser(name, email) {
  // Resolve a random generated ID after a random timer
  // Persist user in localStorage
  const id = uuid();
  const userObj = { name, email, id }
  localStorage.setItem('userObj', JSON.stringify(userObj))
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(userObj)
    }, 1000)

  })
}

export async function makeOrder(userId, orderId) {
  // Resolve with a orderId, order total price and ETA after a random timer
  // Persist order coupled userId in an array in localStorage
    const historyOrder = {userId, orderId}
  if (localStorage.getItem('userObj')) {
    localStorage.setItem('historyOrder', JSON.stringify(historyOrder))
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(historyOrder)
      }, 1000)
    })
  } 
}

// export async function fetchOrderHistory(userId){
//   // Resolve an array of orders after a random timer
// }