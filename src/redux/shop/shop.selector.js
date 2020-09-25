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
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParams => createSelector(
  [selectCollections],
  // so as a result of what was explained at the shopdata page, to carry state normalization we transform this code from
  // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParams])

    // to
  collections => collections[collectionUrlParams]
)


export default selectCollections

