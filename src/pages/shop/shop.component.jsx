import React, { Component } from 'react'
import { Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
import {firestore, convertCollectionsToMap} from '../../firebase/firebase.utils.js'
import updateCollections from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import withSpinner from '../../components/with-spinner/withSpinner.component';

//Since the shop component collects the data which is then pushed to the collections page and collectionoverview page, we then apply the withSpinner HOC here as it is vital to.

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);


// export class ShopPage extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        collections : SHOP_DATA
//     }
//   }
  
//   render() {
//     const { collections } = this.state;
//     return (
//       <div className="shop-page">
//         {
//           collections.map(({id , ...otherCollectionProps}) => (
//             <CollectionPreview key={id} {...otherCollectionProps} />
//           ))
//         }
//       </div>
//     )
//   }
// }

//So now in order to fetch data from firstore we know that we need collections data both in the collectionsoverview page as well as in the collectionpage. So we have to make the call at the topmost level of both components to avoid making multiple calls at their respective components.

class ShopPage extends Component {
  state = {
    loading : true
  }

  unscubscribeFromSnapshot = null;

  componentDidMount() {
    const {updateCollections} = this.props
    const CollectionRef = firestore.collection('collections');

    //we use the traditional way of consuming promises with the .then() method just to show us how to subscribe to a backend other than firebase
    CollectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsToMap(snapshot)
       updateCollections(collectionsMap);
       this.setState({loading : false})
     })

    // CollectionRef.onSnapshot(async snapshot => {
    //  const collectionsMap = convertCollectionsToMap(snapshot)
    //   updateCollections(collectionsMap);
    //   this.setState({loading : false})
    // })
  }
  
  render () {
    const {match} = this.props;
    const {loading} = this.state;
    return  (
      <div className="shop-page">
       <Route exact path={`${match.url}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
       <Route path={`${match.url}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);
