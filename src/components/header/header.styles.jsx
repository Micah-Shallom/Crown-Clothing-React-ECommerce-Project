import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

export const HeaderContainer = styled(motion.div) `
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position : fixed;
  top : 0;
  left : 0;
  background-color: white;
  z-index : 10000000000000000;
  box-shadow: 0px 6px 20px -2px rgba(0,0,0,.2);

  @media screen and (max-width : 800px){
    height : 60px;
    padding : 10px;
    margin-bottom: 30px;
  }
`;

export const LogoContainer = styled(Link) `
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width : 800px){
    width: 50px;
    padding : 0;
  }
`
export const OptionsContainer = styled.div `
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width : 800px){
    width : 80%;
  }
`

// export const OptionContainerStyles = css`
//    padding: 10px 15px;
//   cursor: pointer;
// `;

// export const OptionDiv = styled.div `
//   ${OptionContainerStyles}
// `
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;