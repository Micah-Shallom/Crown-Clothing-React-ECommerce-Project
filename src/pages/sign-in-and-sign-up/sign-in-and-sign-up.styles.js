import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width : 800px){
    width: 100vw;
    align-items : center;
    margin : 0 auto;
    flex-direction : column;
    justify-content: center;
  }
`;