import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const AboutContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 250px;
  ${Container}
`;

export const AboutWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const AboutImage=styled.img`

`;
export const Name=styled.h1`
font-size: 10px;
`;
export const AboutItems=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: center;
  width: 160px;
  color: #000;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 0px;
  }
`;
