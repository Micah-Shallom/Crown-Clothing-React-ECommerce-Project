// import SHOP_DATA from "../../redux/shop/shop.data.jsx"
import ShopTypes from "./shop.types.js";

//Now that we have our shop data stored in firebase firestore, we can remove the shop data or even delete the file. But i will still keep mine for now
const INITIAL_STATE = {
  collections : null,
  isFetching : false,
  errorMessage : undefined
}

const shopReducer = (state = INITIAL_STATE , action) => {
  switch(action.type) {
    case ShopTypes.FETCH_COLLECTION_REQUEST : 
    return {
      ...state ,
      isFetching : true
    }
    case ShopTypes.FETCH_COLLECTION_SUCCESS : 
    return {
      ...state,
      isFetching : false,
      collections : action.payload
    }
    case ShopTypes.FETCH_COLLECTION_FAILURE : 
    return {
      ...state ,
      isFetching : false,
      errorMessage : action.payload
    }
    default : return state;
  }
}

export default shopReducer;