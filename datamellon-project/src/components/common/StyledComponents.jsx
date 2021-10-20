import styled from 'styled-components';
import { device } from '../../constants/breakPoints';

export const FilterContainer = styled.div`
width:200px;
position: static;
height: 100%;
background-color: white;
overflow-y: auto;
 &>div{
    padding:10px;
}
`
export const ContentContainer = styled.div`
flex: 1;
position: static;
height: 100%;
overflow-y: auto;
background:#EFF1F6;
 &>div{
    padding:0px;
    background:#EFF1F6;
}
@media ${device.laptop}{
    padding: 0 10px;
    &>div{
    padding:10px;
}
}
`

export const DataDisplayContainer = styled.div`
width: fit-content;
background: white;
box-shadow: 0px 5.65659px 28.2829px rgba(212, 226, 247, 0.25);

`