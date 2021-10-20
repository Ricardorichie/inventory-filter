import { Spin } from "antd";
import styled, { keyframes } from "styled-components";
import { device } from "../../constants/breakPoints";
import { desktop } from "../../constants/fontSize";


export const LoadingScreen = () => {

    return (
        <Container>
            <div>
                <LogoContainer>
                    <Spin />
                </LogoContainer>
                <h4>Loading...Please wait</h4>
            </div>
        </Container>
    );
};
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    text-align: center;
    color: ${(props) => props.theme.color};
    font-size: 16px;
  }
  @media ${device.laptop} {
    h4 {
      font-size: ${desktop.normal};
    }
  }
`;
export const Loading = keyframes`
 0%
  {
    transform: scale( .75 );
  }

  50%
  {
    transform: scale( 1.0 );
  }
  100%
  {
    transform: scale( 0.75 );
  }

`;
export const LogoContainer = styled.div`
  animation: ${Loading} 1.5s infinite;
  text-align: center;
  img {
    height: 5vw;
    /* width: 5vw; */
    /* border-radius: 50%; */
    /* object-fit: cover; */
  }
`;
