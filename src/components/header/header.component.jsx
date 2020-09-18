import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo }  from '../../assets/4.4 crown.svg.svg'
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';



const Header = ({currentUser , hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      { currentUser !== null ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon/>
    </div>
      {
        hidden ? null : <CartDropdown/>
      }
  </div>
);

// const mapStateToProps = state => ({
//   currentUser : state.user.currentUser
// })

// const mapStateToProps = ({user : {currentUser} , cart : {hidden}}) => ({
//   currentUser,
//   hidden
// })

// const mapStateToProps = state => ({
//   currentUser : selectCurrentUser(state),
//   hidden : selectCartHidden(state)
// })
    // OR USING STRUCTUREDSELECTOR
    const mapStateToProps = createStructuredSelector({
      currentUser : selectCurrentUser,
      hidden : selectCartHidden
    })

export default connect(mapStateToProps)(Header);