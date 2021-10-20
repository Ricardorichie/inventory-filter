import React from 'react'
import styled from 'styled-components'
import { device } from '../../constants/breakPoints'

const Container = ({ children }) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Container

export const StyledContainer = styled.div`
background:#EFF1F6;
height: 100vh;
box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
padding:  10px 10px;
display: flex;
position: relative;
@media ${device.laptop}{
    ${'' /* width: 80%; */}
    
    padding:0 10%;
    margin: 0 auto;
}

`