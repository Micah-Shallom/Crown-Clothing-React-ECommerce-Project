import React from 'react';
import { ReactComponent as Logo }  from '../../assets/4.4 crown.svg.svg'
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { HeaderContainer , LogoContainer , OptionsContainer , OptionLink } from './header.styles'



const Header = ({currentUser, hidden}) => {
    
  return (
    <HeaderContainer
      initial = {{y : -150}}
      animate = {{y : 0}}
      transition = {{delay : 0.2, type:'spring', stiffness: 250, mass : 1}}
    >
      <LogoContainer  to='/'>
        <Logo  />
      </LogoContainer>
      <OptionsContainer >
        <OptionLink  to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink  to='/shop'>
          CONTACT
        </OptionLink>
        
        { currentUser ? 
          <OptionLink as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
          :
          <OptionLink  to='/signin'>
            SIGN IN
          </OptionLink>
         
        }
        <CartIcon/>
      </OptionsContainer>
        {
          hidden ? null : <CartDropdown/>
        }
    </HeaderContainer>
  );
}

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