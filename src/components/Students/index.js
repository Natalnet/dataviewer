import React from 'react';

import { Header, FilterInput, FilterSpace, FilterButton, FilterOptions, FilterOption } from './style';
import { Body, StudentData, StudentImage, Data, Name, Note, Indicator} from './style';

export default props => {
    return (

        <>
            <Header>
                <FilterSpace>
                    <FilterInput type="text" />
                    <FilterButton className="fas fa-filter" />
                </FilterSpace>
                <FilterOptions>
                    <FilterOption>Nome</FilterOption>
                    <FilterOption>Nota</FilterOption>
                    <FilterOption>Desempenho</FilterOption>
                </FilterOptions>
            </Header>

            <Body>
                <StudentData> 
                    <StudentImage />
                    <Data>
                        <Name>Neto Vilela</Name>
                        <Note>Nota: 7.0</Note>
                    </Data>
                    <Indicator success={true} />
                </StudentData>

                <StudentData> 
                    <StudentImage />
                    <Data>
                        <Name>Francisco de Assis Vilela Neto</Name>
                        <Note>Nota: 4.0</Note>
                    </Data>
                    <Indicator success={false} />
                </StudentData>

                <StudentData> 
                    <StudentImage />
                    <Data>
                        <Name>Alana Sato</Name>
                        <Note>Nota: 7.0</Note>
                    </Data>
                    <Indicator success={true} />
                </StudentData>

                <StudentData> 
                    <StudentImage />
                    <Data>
                        <Name>João Pereira da Silva</Name>
                        <Note>Nota: 2.0</Note>
                    </Data>
                    <Indicator success={false} />
                </StudentData>
            </Body>
        </>
    )
}