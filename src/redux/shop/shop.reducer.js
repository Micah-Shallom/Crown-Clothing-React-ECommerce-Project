import SHOP_DATA from "../../redux/shop/shop.data.jsx"
import ShopTypes from "./shop.types.js";

//Now that we have our shop data stored in firebase firestore, we can remove the shop data or even delete the file. But i will still keep mine for now
const INITIAL_STATE = {
  collections : null
}

const shopReducer = (state = INITIAL_STATE , action) => {
  switch(action.type) {
    case ShopTypes.UPDATE_COLLECTIONS : 
    return {
      ...state,
      collections : action.payload
    }
    default : return state
  }
}

export default shopReducer;