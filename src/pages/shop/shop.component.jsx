import React from 'react'
import { Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';


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

const ShopPage = ({match}) => {
  return  (
    <div className="shop-page">
     <Route exact path={`${match.url}`} component={CollectionsOverview} />
     <Route path={`${match.url}/:collectionId`} component={CollectionPage} />
    </div>
  )
}


export default ShopPage;
