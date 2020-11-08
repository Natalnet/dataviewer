import React, { useState, useEffect } from 'react';

import { Header, FilterInput, FilterSpace, FilterButton, FilterOptions, FilterOption } from './style';
import { Body, Div, StudentData, StudentImage, Data, Name, Note, Indicator } from './style';

import { students } from '../../json/df_perfomance_list.json';


export default props => {
    const [alunos, setAlunos] = useState(students);

    function filtrar(param) {
        let auxiliarAlunos;
        if (param == "nome") {

            console.log("nome \n" + alunos) //*console

            auxiliarAlunos = [...alunos].sort(function (a, b) {
                const nomeA = a.nome.toUpperCase();
                const nomeB = b.nome.toUpperCase();

                if (nomeA === nomeB) {
                    return 0;
                } else if (nomeA < nomeB) {
                    return -1;
                } else {
                    return 1;
                }

            })
            setAlunos(auxiliarAlunos)
            console.log(alunos) //*console
        }
        if (param == "nota") {
            console.log("nota\n" + alunos) //*console
            auxiliarAlunos = [...alunos].sort(function (a, b) {
                return b.media - a.media;
            })
            setAlunos(auxiliarAlunos)
            console.log(alunos) //*console
        }
    }

    function getMatricula(text) {
        let matricula = text.split("-")[1];
        return matricula;
    }
    function getNome(text) {
        let nome = text.split("-")[0];
        return nome;
    }

    
    return (

        <>
            <Header>
                <FilterSpace>
                    <FilterInput type="text" />
                    <FilterButton className="fas fa-filter" />
                </FilterSpace>
                <FilterOptions>
                    <FilterOption onClick={() => filtrar("nome")} >Nome</FilterOption>
                    <FilterOption onClick={() => filtrar("nota")} >Nota</FilterOption>
                    <FilterOption onClick={() => filtrar("desempenho")} >Desempenho</FilterOption>
                </FilterOptions>
            </Header>

            <Body>
                {
                    alunos.map(aluno => {

                        return (
                            <StudentData key={aluno.id}>
                                <Div>
                                    <StudentImage />
                                    <Data>
                                        <Name>{getNome(aluno.nome)}</Name>
                                        <Name>Matricula: {getMatricula(aluno.nome)}</Name>
                                        <Note>Nota: {aluno.media}</Note>
                                    </Data>
                                </Div>
                                {aluno.media >= 5 ?
                                    <Indicator success={true} />
                                    : <Indicator success={false} />
                                }

                            </StudentData>
                        )

                    })
                }
            </Body>
        </>
    )
}