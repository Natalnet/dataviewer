import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
`;

export default props =>{
    return(
        <Container>
            {props.children}
        </Container>
    )
}