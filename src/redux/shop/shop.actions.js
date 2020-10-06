const { default: ShopTypes } = require("./shop.types")

const updateCollections = collections => ({
  type : ShopTypes.UPDATE_COLLECTIONS,
  payload : collections
})

export default updateCollections;