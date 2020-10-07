import React from 'react';
import styled from 'styled-components';

/* Components General */
import {HeaderCard, TitleCard, Options, Option, Line} from '../Card/Card';

export const BigCard = styled.div`
    width: 56vw;
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
            <BigCard>
                <HeaderCard>
                    <TitleCard>{props.title}</TitleCard>
                    <Options>
                        <Option>{props.firstOption}</Option>
                        <Line />
                        <Option>{props.secondOption}</Option>
                    </Options>
                </HeaderCard>
            </BigCard>
        )
    } else {
        return (
            <BigCard>
                <HeaderCard>
                    <TitleCard>{props.title}</TitleCard>
                </HeaderCard>
            </BigCard>
        )
    }

}