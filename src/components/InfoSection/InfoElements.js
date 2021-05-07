import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #f4e8de;
  background: ${({ lightBg }) => (lightBg ? '#f4e8de' : '#442c23')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 20px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 20px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 530px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  color: #bf8d58;
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 44px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f4e8de' : '#442c23')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 22px;
  line-height: 26px;
  color: ${({ darkText }) => (darkText ? '#442c23' : '#f4e8de')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
`;

export const ButtonSec = styled.a`
  border-radius: 50px;

  &:link, &:visited {
  background-color: #e4a96a;
  color: #442c23;
  font-size: 16px;
  font-weight: bold;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

&:hover, &:active {
  background: #bf8d58;
}
`;


