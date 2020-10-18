import React, { Component } from 'react'
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       hasErrored : false
    }
  }
  

  static getDerivedStateFromError(error){

    return { hasErrored : true}
  }

  componentDidCatch(error , info) {

    console.log(error);
    // The info gives us information about the particular component that has been broken
  }

  render(){
    if (this.state.hasErrored){
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
            <ErrorImageText>
              Something Very Very Very Very Terrible Happened. &#128557;
              <p>Signed : Micah Shallom</p>
            </ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary
