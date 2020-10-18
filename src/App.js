import React, {Component, useEffect} from 'react';
import HomePage from './pages/homepage/homepage.component.jsx';
import {Route , Switch , Redirect} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { addCollectionAndDocuments, auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user-actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout.component';
import { selectCollectionForPreview } from './redux/shop/shop.selector';
import { GlobalStyles } from './global.styles.js';

//Convert class based to functional component to make use of useEffect to handle componentdidmount

const App = ( { setCurrentUser, currentUser, collectionsArray } ) => {

  useEffect  (() => {
    const unsubscribeFromAuthstream = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        await userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      
      setCurrentUser(userAuth );
      //Am suppose to remove the following marked code with (**) after setting the collection ref already on our firestore database
      // **
      // addCollectionAndDocuments('collections', collectionsArray.map(({title,items}) => ({title,items})))
    });

    return () => {
      unsubscribeFromAuthstream()
    }
  },[])



  // unsubscribeFromAuth = null;

  // componentDidMount() {

  //   const { setCurrentUser, collectionsArray } = this.props
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       userRef.onSnapshot(snapShot => {
  //         setCurrentUser({
  //             id: snapShot.id,
  //             ...snapShot.data()
  //         });
  //       });
  //     }
      
  //     setCurrentUser(userAuth );
  //     //Am suppose to remove the following marked code with (**) after setting the collection ref already on our firestore database
  //     // **
  //     // addCollectionAndDocuments('collections', collectionsArray.map(({title,items}) => ({title,items})))
  //   });
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

    return (
      <div>
      <GlobalStyles/>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckoutPage} />

          {/* <Route exact path='/signin' render={ () => 
          this.props.currentUser ? 
          (<Redirect to='/'/>) : 
          (<SignInAndSignUpPage/>)} /> */}
          <Route exact path='/signin' render={ () => 
          currentUser ? 
          (<Redirect to='/'/>) : 
          (<SignInAndSignUpPage/>)} />
        </Switch>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  //**
  // collectionsArray : selectCollectionForPreview
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
