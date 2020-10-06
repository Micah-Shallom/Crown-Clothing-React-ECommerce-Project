import {firestore , convertCollectionsToMap} from '../../firebase/firebase.utils'
const { default: ShopTypes } = require("./shop.types");


const fetchCollectionsRequest = ( ) => ({
  type : ShopTypes.FETCH_COLLECTION_REQUEST
})

const fetchCollectionsSuccess = collectionsMap => ({
  type : ShopTypes.FETCH_COLLECTION_SUCCESS,
  payload : collectionsMap
})

const fetchCollectionsFailure = error => ({
  type : ShopTypes.FETCH_COLLECTION_FAILURE,
  payload : error
})

const fetchCollectionsAsync= () => {
  return dispatch => {
    const CollectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsRequest());

    CollectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsToMap(snapshot)
       dispatch(fetchCollectionsSuccess(collectionsMap));
     }).catch(error => {
       dispatch(fetchCollectionsFailure(error.message))
     })
  }
}

//This was used to pass collections when we didnt decide to use asynchronous redux
// const updateCollections = collections => ({
//   type : ShopTypes.UPDATE_COLLECTIONS,
//   payload : collections
// })

// export default updateCollections;
export default fetchCollectionsAsync;