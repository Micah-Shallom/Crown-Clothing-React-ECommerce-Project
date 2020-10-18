import React, { Component, useEffect } from 'react'
import { Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
import updateCollections from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';
import withSpinner from '../../components/with-spinner/withSpinner.component';
import fetchCollectionsAsync from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { selectCollectionFetchingState, selectCollectionLoadedState } from '../../redux/shop/shop.selector';

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

//In order to use React hooks,we have to convert the class based component into a functional based component and make use of the useeffect on all componentDidMount

    const ShopPage = ({fetchCollectionsAsync,match, isCollectionFetching,isCollectionLoadedAlready}) => {
    //   state = {
    //     loading : true
    //   }

    //   unscubscribeFromSnapshot = null;

useEffect(() => {
  fetchCollectionsAsync();
},[fetchCollectionsAsync]);

  // componentDidMount() {
  //   const {fetchCollectionsAsync} = this.props;
  //   // the presence of this function call on this component did mount causes certain drawbacks.First when the page is refreshed, what happens is that the other components which are the collectionpage and the componentOverview page being render synchronously tends to be rendered before the fetchcollectionsaync() function which is asynchronous hence it wont be able to map over collections in its mapstatetoprops as the initial value of it would be null. To fix this we have to cause a delay buy creating a new selector which helps us render our spinner and unmounts it only when the collection value return a valid object . this can be seen in the shop selectors page.

  //   fetchCollectionsAsync();


    // const {updateCollections} = this.props
    
    //we use the traditional way of consuming promises with the .then() method just to show us how to subscribe to a backend other than firebase but later this block of code wont be here rather would be pushed into redux for an asynchronous redux call
          // const CollectionRef = firestore.collection('collections');
          // CollectionRef.get().then(snapshot => {
          //   const collectionsMap = convertCollectionsToMap(snapshot)
          //    updateCollections(collectionsMap);
          //    this.setState({loading : false})
    //  })

    // CollectionRef.onSnapshot(async snapshot => {
    //  const collectionsMap = convertCollectionsToMap(snapshot)
    //   updateCollections(collectionsMap);
    //   this.setState({loading : false})
    // })
  // }
  
    // the inverse value of the isCollectionLoadedAlready helps us to only render our components only when the collections has been fully received hence we just keep loading our spinner. Notice that we had to reverse the value with the (!) sign .this is because we only want to render our component when it isCollectionLoadedAlready is true. Just check your withSpinner component for more details.
    // const  = this.props;
    // const {loading} = this.state;
    return  (
      <div className="shop-page">
        <Route 
          exact path={`${match.url}`} 
          render={(props) => <CollectionsOverviewWithSpinner isLoading={!isCollectionLoadedAlready} {...props} />} 
        />
        
        <Route 
          path={`${match.url}/:collectionId`} 
          render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoadedAlready} {...props} />} 
        />
      </div>
    )
  }

const mapStateToProps = createStructuredSelector({
  isCollectionFetching : selectCollectionFetchingState,
  isCollectionLoadedAlready : selectCollectionLoadedState
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync : () => dispatch(fetchCollectionsAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);
