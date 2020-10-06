import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './withSpinner.styles'

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
  const Spinner =  ({isLoading, ...otherProps}) => {
    return isLoading ?
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
    :
    <WrappedComponent {...otherProps} />
  }
  return Spinner;
};

export default withSpinner
