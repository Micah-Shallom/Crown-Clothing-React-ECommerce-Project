import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  padding : 60px 0 0 0;

  @media screen and (max-width : 800px){
    width: 100vw;
    align-items : center;
    margin : 0 auto;
    flex-direction : column;
    justify-content: center;
  }
`;