import React from "react";
import { Button as AntButton } from "antd";
import styled from "styled-components";
import { device } from "../../constants/breakPoints";



export const Button = ({
    colorProp,
    width,
    htmlType,
    disabled,
    text,
    onClick,
    style,
    loading,
}) => {
    return (
        <Container>
            <StyledButton
                colorProp={colorProp}
                style={{ ...style }}
                disabled={disabled}
                width={width}
                size="large"
                onClick={onClick}
                htmlType={htmlType}
                loading={loading}
            >
                {text}
            </StyledButton>
        </Container>
    );
};

const StyledButton = styled(AntButton)`
  cursor: pointer;
  background: #6696d7;
  color: black;
  font-weight: 500;
  ${'' /* box-shadow: ${(props) => (props.colorProp ? "none" : props.theme.shadow)}; */}
  border-radius: 5px;

  ${'' /* width: ${(props) => props.width}; */}
  transition: all 0.5s ease;

  :active,
  :focus,
  :hover {
    box-shadow: none;
    transition: all 0.5s ease;
    background:#6696D7;
    color:black;
  }
`;

const Container = styled.div`
  text-align: center;
  ${"" /* margin-top: -20px; */}
  @media ${device.laptop} {
    width: 100%;
    margin: 0;
    height: 2.5vw;
    text-align: center;
  }
`;
