import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2vh;
`;

export const FilterSpace = styled.div`
    display: flex;
    width: 75%;
    justify-content: center;
    align-items: center;
`;

export const FilterInput = styled.input`
    padding: 1vh;
    border: 1px solid #C4C4C4;
    border-radius: 7px 0px 0px 7px;
    width: 70%;
`;

export const FilterButton = styled.div`
    color: #C4C4C4;
    display: flex;
    align-items: center;
    font-size: 1.3em;
    border: solid 1px #C4C4C4;
    padding: 0.8vh;
    :hover{
        cursor: pointer;
    }
`;

export const FilterOptions = styled.ul`
    background: #F3F3F3;
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 8vh;
    width: 15%;
    list-style: none;
    font-size: 0.9em;
`;

export const FilterOption = styled.li`
    margin: 0.4vh;
`;

export const Body = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    overflow: auto;
    height: 30vh;
    max-height: 20vh;
`;

export const StudentData = styled.div`
    margin: 0vh 1vh 1vh 1vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const StudentImage = styled.div`
    width: 2.5vw;
    height: 2.5vw;
    background: #8D5555;
    border-radius: 50%;
    margin: 0px 1vh;
`;

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 1vh;
`;
export const Name = styled.p`
    margin: 0.2vh;
    font-size: 1em;
`;
export const Note = styled.p`
    margin: 0.2vh;
    font-size: 0.9em;
`;

export const Indicator = styled.div`
    width: 5vh;
    height: 1.8vh;
    background: ${props => props.success ? "#76DB6D" : "#DB3030"};
    border-radius: 5px;
    margin: 0px 1vh;
`;