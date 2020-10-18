import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 26vw;
    margin-top: 5vh;
    min-width: 26vw;
    background: #fff;
    height: 40vh;
    border-radius: 15px;
    overflow: hidden;
`;

export const HeaderCard = styled.div`
    background: rgba(154, 160, 172, 0.4);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1vh;
`;

export const TitleCard = styled.div`
    font-size: 0.9em;
    font-weight: bold;
    padding: 2vh;
    margin: 0 auto;
`;

export const Options = styled.div`
    background: rgba(154, 160, 172, 0.4);
    padding: 0.5vh;
    border-radius: 20px; 
    display: flex;
    align-items: center;
    margin: 0 auto;
`;

export const Option = styled.div`
    font-size: 0.9em;
    cursor: pointer;
    margin: 0 1vh;
`;

export const Line = styled.div`
    width: 1px;
    background: #fff;
    height: 3vh;
`;

export const BigCard = styled.div`
    width: 55vw;
    margin-top: 5vh;
    min-width: 26vw;
    background: #fff;
    height: 40vh;
    border-radius: 15px;
    overflow: hidden;
`;


export default props => {
    if (props.firstOption) {
        return (
            <Card>
                <HeaderCard>
                    <TitleCard>{props.title}</TitleCard>
                    <Options>
                        <Option>{props.firstOption}</Option>
                        <Line />
                        <Option>{props.secondOption}</Option>
                    </Options>
                </HeaderCard>
            </Card>
        )
    } else {
        return (
            <Card>
                <HeaderCard>
                    <TitleCard>{props.title}</TitleCard>
                </HeaderCard>
            </Card>
        )
    }

}