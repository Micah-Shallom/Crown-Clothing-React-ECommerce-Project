import React from 'react'
import Spinner from '../Spinner/Spinner.component'
// import { SpinnerContainer, SpinnerOverlay } from './withSpinner.styles'


// const withSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
//   return isLoading ?
//   <SpinnerOverlay>
//     <SpinnerContainer />
//   </SpinnerOverlay>
//   :
//   <WrappedComponent {...otherProps} />
// }

// or making the code more explicit
const withSpinner = WrappedComponent => {
  const NewSpinner =  ({isLoading, ...otherProps}) => {
    return isLoading ?
      <Spinner />
    :
    <WrappedComponent {...otherProps} />
  }
  return NewSpinner;
};

export default withSpinner
