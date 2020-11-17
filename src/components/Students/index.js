import React, { useState } from 'react';

import Modal from './Modal';

import { Header, FilterInput, FilterSpace, FilterButton, FilterOptions, FilterOption } from './style';
import { Body, Div, StudentData, StudentImage, Data, Name, Note, Indicator } from './style';

import { students } from '../../json/df_perfomance_list.json';
import Grafico from '../Grafic/StudentsGrafic';

export default props => {
    const [alunos, setAlunos] = useState(students);
    const [open, setOpen] = useState(false);
    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    function handleOpen(nome, matricula) {
        setOpen(true);
        setNome(nome);
        setMatricula(matricula);
    };

    const handleClose = () => {
        setOpen(false);

    };

    function handleChange(e) {
        let busca = e.target.value;
        if (busca !== '')
            setAlunos(students.filter(item => (item.nome.includes(busca))));
        else
            setAlunos(students);
    }

    function filtrar(param) {
        let auxiliarAlunos;
        if (param === "nome") {

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
        if (param === "nota") {
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
    const body = (
        <div>
            <h2 id="simple-modal-title">{nome}</h2>
            <p id="simple-modal-description">
                {matricula}
            </p>
            <Grafico matricula={matricula} />
        </div>
    )
    return (

        <>
            <Header>
                <FilterSpace>
                    <FilterInput type="text" onChange={handleChange} />
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
                    alunos.map(aluno => (
                        <StudentData key={aluno.id} onClick={() => handleOpen(getNome(aluno.nome),getMatricula(aluno.nome))} >
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

                    ))
                }
                <Modal open={open} body={body} close={handleClose} />
            </Body>
        </>
    )
}