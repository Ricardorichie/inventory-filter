import React from 'react'
import { Input, DatePicker as AntDatePicker } from "antd";
import { device } from '../../constants/breakPoints';
import styled from 'styled-components';
import { desktop, mobile } from '../../constants/fontSize';


export const TextInput = ({
    type,
    placeholder,
    name,
    label,
    max,
    onChange,
    min,
    value,
    required,
    //   validateStatus,
    helperText,
}) => {
    return (
        <>
            <h5 style={{ margin: 0 }}>{label}</h5>
            <InputDiv>
                <StyledInputBorderless
                    bordered={false}
                    required={required ? true : false}
                    type={type}
                    maxLength={max}
                    name={name}
                    minLength={min}
                    onChange={onChange}
                    value={value}
                    // name={name}
                    placeholder={placeholder}
                />
            </InputDiv>
            <br />
        </>
    );
};

export const DatePicker = ({ onChange }) => {
    return (
        <>
            <h5 style={{ margin: 0 }}>By order date</h5>

            <InputDiv>
                <StyledDataPicker onChange={onChange} format="DD/MM/YYYY" aria-required />
            </InputDiv>
            <br />
        </>

    );
};
const StyledDataPicker = styled(AntDatePicker)`
  ${"" /* outline: none; */}
  height: 100%;
  width: 100%;
  padding: 5px 10px;
  font-size: ${desktop.small};
  border: none;
  cursor: pointer;
  outline: none;
  background: ${(props) => props.theme.foreground};
  color: ${(props) => props.theme.color};
  font-size: 16px;
  .ant-picker-suffix {
    color: ${(props) => props.theme.color};
  }
  input {
    color: ${(props) => props.theme.color};
  }
  @media ${device.laptop} {
    font-size: ${desktop.small};
  }
`;

export const StyledInputBorderless = styled(Input)`
  &&& {
    outline: none;
    height: 100%;
    padding: 5px 10px;

    font-size: 14px;
    background: #EFF1F6;
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .ant-input {
    background: #EFF1F6;
      color: black;
      font-size: ${mobile.small};
    }
    @media ${device.laptop} {
      font-size: ${desktop.small};
      .ant-input {
        font-size: ${desktop.small};
      }
    }
  }
`;
export const InputDiv = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 0vw 0vw;
  :active,
  :focus,
  :hover {
    border: 2px solid #BFB8D7;
  }
  @media ${device.laptop} {
    height: 2.5vw;
    :active,
    :focus,
    :hover {
      border: 2px solid #BFB8D7;
    }
  }
`;