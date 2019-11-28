import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  SUB_SHIPPING,
  ADD_QUANTITY,
  ADD_SHIPPING,
  ADD_ITEMS
} from '../actionTypes/cartActions';

const INITIAL_STATE = {
  items: [],
  addedItems: [],
  total: 0
};

function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      {
        let addedItem = state.items.find(item => item.id === action.payload);
        let existed_item = state.addedItems.find(item => action.payload === item.id);
        if (existed_item) {
          addedItem.quantity += 1
          return {
            ...state,
            total: state.total + addedItem.price
          }
        } else {
          addedItem.quantity = 1;
          let newTotal = state.total + addedItem.price

          return {
            ...state,
            addedItems: [
              ...state.addedItems,
              addedItem
            ],
            total: newTotal
          }
        }
      }

    case REMOVE_ITEM:
      {
        let itemToRemove = state.addedItems.find(item => action.payload === item.id)
        let new_items = state.addedItems.filter(item => action.payload !== item.id)

        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
          ...state,
          addedItems: new_items,
          total: newTotal
        }
      }
    case ADD_QUANTITY:
      {
        let addedItem = state.items.find(item => item.id === action.payload)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
          ...state,
          total: newTotal
        }
      }

    case SUB_QUANTITY:
      {
        let addedItem = state.items.find(item => item.id === action.payload);
        if (addedItem.quantity === 1) {
          let new_items = state.addedItems.filter(item => item.id !== action.payload)
          let newTotal = state.total - addedItem.price
          return {
            ...state,
            addedItems: new_items,
            total: newTotal
          }
        } else {
          addedItem.quantity -= 1
          let newTotal = state.total - addedItem.price
          return {
            ...state,
            total: newTotal
          }
        }

      }

    case ADD_SHIPPING:
      {
        return {
          ...state,
          total: state.total + 6
        }
      }

    case SUB_SHIPPING:
      {
        return {
          ...state,
          total: state.total - 6
        }
      }

    case ADD_ITEMS:
      {
        return {
          ...state,
          items: action.payload
        }
      }
    default:
      return state;
  }
}

export default cartReducer;
