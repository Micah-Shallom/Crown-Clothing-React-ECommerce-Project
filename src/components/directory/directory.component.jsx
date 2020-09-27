import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import { DirectoryMenuContainer } from './directory.styles.js'


// class Directory extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       initially the state was handled locally and now it has been moved into its own external redux state so the class component can be written as a functional component and the state pulled as props from MapStateToProps passed from the directory reducer
//     }
//   }
  
//   render() {
//     return (
//       <div className='directory-menu'>
//         {
//           this.state.sections.map(({id , ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps}/>)
//         }
//       </div>
//     )
//   }
// }

const Directory = ( {sections} ) => (
  <DirectoryMenuContainer>
    {
      sections.map(({id , ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps}/>)
    }
  </DirectoryMenuContainer>
)

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySection
})

export default connect(mapStateToProps)(Directory);
