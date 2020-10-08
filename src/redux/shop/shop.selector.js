const { createSelector } = require("reselect")

// const COLLECTION_ID_MAP = {
//   hats : 1,
//   sneakers : 2,
//   jackets : 3,
//   womens : 4,
//   mens: 5
// }

 const selectShop = state => state.shop

 const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

//As a result of converting shop data from an array to an object, the components nested under the shoppage still thinks shopdata is an array as we wrote .map() functions to iterate over them and display its data. So we have to create a selector that converts such data to an array so it can be used by the shop page.

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParams => createSelector(
  [selectCollections],
  // so as a result of what was explained at the shopdata page, to carry state normalization we transform this code from
  // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParams])

    // to
  collections =>  (collections ? collections[collectionUrlParams] : null)
)

//now am trying to provide the state of our isFetching data into the global environment so that i can transfer its value which will be useful for activating the spinner in our shop component
export const selectCollectionFetchingState = createSelector(
  [selectShop],
  shop => shop.isFetching
)

export const selectCollectionLoadedState = createSelector(
  [selectShop],
  //note the use of the double bang helps to tells in a manner that a !!null = false while a !!{object} = true.
  shop => !!shop.collections
)

export default selectCollections;

