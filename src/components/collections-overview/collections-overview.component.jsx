import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCollectionForPreview } from '../../redux/shop/shop.selector'
// import { selectCollections, } from '../../redux/shop/shop.selector'
import CollectionPreview from '../collection-preview/collection-preview.component'
import {CollectionsOverviewContainer} from './collections-overview.styles.js'


const CollectionsOverview = ( {collections }) => (
  <CollectionsOverviewContainer>
     {
    collections.map(({id , ...otherCollectionProps}) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))
  }
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  // collections : selectCollections
  collections : selectCollectionForPreview
})

// export default connect(mapStateToProps)(CollectionsOverview);
export default connect(mapStateToProps)(CollectionsOverview)