import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  SUB_SHIPPING,
  ADD_QUANTITY,
  ADD_SHIPPING,
  ADD_ITEMS
} from '../actionTypes/cartActions';

import fries from '../../images/fries.jpg';
import belgianfries from '../../images/belgianfries.jpg';
import friesyellow from '../../images/friesyellow.jpg';
import handcutstyle from '../../images/handcutstyle.jpg';
import shoestrings from '../../images/shoestrings.jpg';
import steakfries from '../../images/steakfries.jpg';
import organiccubes from '../../images/organiccubes.jpg';
import organicflakes from '../../images/organicflakes.jpg';
import organicfrenchfries from '../../images/organicfrenchfries.jpg';
import organicmash from '../../images/organicmash.jpg';
import organicsteakfries from '../../images/organicsteakfries.jpg';
import organicwedges from '../../images/organicwedges.jpg';
import frozentwo from '../../images/frozentwo.png';
import frozenone from '../../images/frozenone.jpg';
import dehydrated from '../../images/dehydrated.png';

const INITIAL_STATE = {
  items: [
    { id: 0, title: "Shoestrings", desc: "Shoestrings 7/7mm-1/4'' 2-way cook 5 kg", price: 2, img: shoestrings, discoutinuedDate: null, quantity: 0, type: 'chilled' },
    { id: 1, title: "Fries", desc: "Fries 10/10mm-3/8'' 2-way cook 5 kg", price: 2, img: fries, discoutinuedDate: null, quantity: 0, type: 'chilled' },
    { id: 2, title: "Belgian Fries", desc: "Belgian Fries 2 way cook 5 kg", price: 2, img: belgianfries, discoutinuedDate: null, quantity: 0, type: 'chilled' },
    { id: 3, title: "Steak Fries", desc: "Steak Fries 10/18mm 2 way cook 5 kg", price: 2, img: steakfries, discoutinuedDate: null, quantity: 0, type: 'chilled' },
    { id: 4, title: "Hand Cut Style-Skin", desc: "Hand Cut style skin fries 15/15mm only for fries 5 kg", price: 2, img: handcutstyle, discoutinuedDate: null, quantity: 0, type: 'chilled' },
    { id: 5, title: "Fries", desc: "Fries 14/14mm-9/16'' 5 kg", price: 2, img: friesyellow, discoutinuedDate: null, quantity: 0, type: 'chilled' },
    { id: 6, title: "Organic Fries", desc: "Organic Fries 12/12mm 10 x 1 kg", price: 2, img: organicfrenchfries, discoutinuedDate: null, quantity: 0, type: 'organic' },
    { id: 7, title: "Organic Steak Fries", desc: "Fries 10/19mm 10 x 1 kg", price: 2, img: organicsteakfries, discoutinuedDate: null, quantity: 0, type: 'organic' },
    { id: 8, title: "Organic Cubes", desc: "Organic Cubes 12/12/12mm 10 x 1 kg", price: 2, img: organiccubes, discoutinuedDate: null, quantity: 0, type: 'organic' },
    { id: 9, title: "Organic Wedges", desc: "Wedges (cut in 8) 10 x 1 kg", price: 2, img: organicwedges, discoutinuedDate: null, quantity: 0, type: 'organic' },
    { id: 10, title: "Organic Plain Mash", desc: "Organic Plain Mash 10 x 1 kg", price: 2, img: organicmash, discoutinuedDate: null, quantity: 0, type: 'organic' },
    { id: 11, title: "Organic Flakes", desc: "Organic Flakes 5mm 10 x 1 kg", price: 2, img: organicflakes, discoutinuedDate: null, quantity: 0, type: 'organic' },
    { id: 12, title: "Belgian Frites", desc: "Frites 10 x 1 kg", price: 2, img: frozenone, discoutinuedDate: null, quantity: 0, type: 'frozen' },
    { id: 13, title: "Frish Fries", desc: "Chilled Frish Fries", price: 2, img: frozentwo, discoutinuedDate: null, quantity: 0, type: 'frozen' },
    { id: 14, title: "Pommes Stripes", desc: "Pommes Stripes 3 way cook 2.5 kg", price: 2, img: dehydrated, discoutinuedDate: null, quantity: 0, type: 'dehydrated' },
  ],
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
