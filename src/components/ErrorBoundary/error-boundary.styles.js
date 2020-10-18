import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 70vh;
  height: 300px;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;

  @media screen and (max-width : 500px){
    font-size : 20px;
  }
`;