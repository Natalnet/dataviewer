import { Container, Grid, Paper, Tab } from '@material-ui/core';
import styled from 'styled-components';

export const ContainerRoot = styled(Container)`
  flex-grow: 1;
  background-color: transparent;
  box-shadow: unset;
`;
export const GridItem = styled(Grid)`
  @media screen and (max-width: 600px) {
    max-width: 100%;
    justify-content: center;
  }
`;
export const GridItemMD = styled(Grid)`
  z-index: -1;
  @media screen and (max-width: 1200px) {
    margin: 0px 8px 0px 112px;
  }
  @media screen and (max-width: 600px) {
    max-width: 100%;
    justify-content: center;
    margin-top: 5%;
    position: relative;
    right: 13em;
  }
`;
export const GridContainer = styled(Grid)`
  @media screen and (max-width: 600px) {
    max-height: 24em;
  }
  max-height: 10em;
`;
export const GridContainer1 = styled(Grid)`
  margin-top: 5em;
`;
export const GridContainer2 = styled(Grid)`
  @media screen and (max-width: 600px) {
    display: block;
  }
`;
export const PaperRoot = styled(Paper)`
  flex-grow: 1;
  background-color: transparent;
  box-shadow: unset;
`;
export const TabFonts = styled(Tab)`
  font-family: Poppins;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  font-style: normal;
  color: #c0c0c0;
  text-transform: none;
  &:hover {
    background-color: #00000026;
    color: #373737;
  }
  @media screen and (max-width: 600px) {
    font-size: 11px;
  }
`;
export const H1 = styled.h1`
  margin: 0;
  font-size: 20px;
  font-family: Roboto;
  text-align: center;
`;
