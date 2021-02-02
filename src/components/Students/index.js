import React, { useState } from 'react';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MenuChart from '../MenuChart';

import { Header, FilterInput, FilterSpace, FilterButton } from './style';
import { Body, Div, StudentData, StudentImage, Data, Name, Note, Indicator } from './style';

import Grafic from '../Grafic/StudentGrafic';

export default function App({ students, performance, bySubject, byDifficulty,
    dataKeyX, dataKeyBar, name, type, mediaList, mediaDifficulty }) {
    const [alunos, setAlunos] = useState(students);
    const [open, setOpen] = useState(false);
    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [chart, setChart] = useState('Lista');

    useState(() => {
        let auxiliarAlunos = [...alunos].sort(function (a, b) {
            const nomeA = a.user.toUpperCase();
            const nomeB = b.user.toUpperCase();

            if (nomeA === nomeB) {
                return 0;
            } else if (nomeA < nomeB) {
                return -1;
            } else {
                return 1;
            }

        })
        setAlunos(auxiliarAlunos);
    }, [])

    function viewChart(value) {
        setChart(value);
    }
    function handleOpen(nome, matricula) {
        setOpen(true);
        setNome(nome);
        setMatricula(matricula);
    };

    const handleClose = () => {
        setOpen(false);
        setChart("Lista");
    };

    function handleChange(e) {
        let busca = e.target.value;
        if (busca !== '')
            setAlunos(students.filter(item => (item.user.toLowerCase()
                .includes(busca.toLowerCase()))));
        else
            setAlunos(students);
    }

    function filtrar(param) {
        let auxiliarAlunos;
        if (param === "Nome") {

            auxiliarAlunos = [...alunos].sort(function (a, b) {
                const nomeA = a.user.toUpperCase();
                const nomeB = b.user.toUpperCase();

                if (nomeA === nomeB) {
                    return 0;
                } else if (nomeA < nomeB) {
                    return -1;
                } else {
                    return 1;
                }

            })
            setAlunos(auxiliarAlunos);
        } else if (param === "Nota") {
            auxiliarAlunos = [...alunos].sort(function (a, b) {
                return b.studentMediaSubject - a.studentMediaSubject;
            })
            setAlunos(auxiliarAlunos);
        } else {
            auxiliarAlunos = [...alunos].sort(function (a, b) {
                return a.studentMediaSubject - b.studentMediaSubject;
            })
            setAlunos(auxiliarAlunos);
        }
    }
    return (
        <>
            <Header>
                <FilterSpace>
                    <FilterInput type="text" onChange={handleChange} />
                    <FilterButton className="fas fa-filter" />
                </FilterSpace>
            </Header>
            <MenuChart viewChart={filtrar} name1={'Nome'} name2={'Nota'} name3={'Desempenho'} />
            <Body>
                {
                    alunos.map(aluno => (
                        <StudentData key={aluno.registration} onClick={() =>
                            handleOpen(aluno.user, aluno.registration)} >
                            <Div>
                                <StudentImage />
                                <Data>
                                    <Name>{aluno.user}</Name>
                                    <Name>Matricula: {aluno.registration}</Name>
                                    <Note>Média por {type}: {type === "lista" ?
                                        mediaList.filter(item => item.registration.trim() ===
                                            aluno.registration.trim())[0].studentMediaLists.toFixed(2) :
                                        mediaList.filter(item => item.registration.trim() ===
                                            aluno.registration.trim())[0].studentMediaTests.toFixed(2)}%</Note>
                                    <Note>Média por assuntos: {students.filter(item =>
                                        item.registration.trim() === aluno.registration.trim())[0]
                                        .studentMediaSubject.toFixed(2)}%</Note>
                                    <Note>Média por dificuldade: {mediaDifficulty.filter(item =>
                                        item.registration.trim() === aluno.registration.trim())[0]
                                        .studentMediaDifficulties.toFixed(2)}%</Note>
                                </Data>
                            </Div>
                            {type === "lista" ?
                                mediaList.filter(item => item.registration.trim() ===
                                    aluno.registration.trim())[0].studentMediaLists.toFixed(2) >= 50 ?
                                    <Indicator success={true} />
                                    : <Indicator success={false} />
                                :
                                mediaList.filter(item => item.registration.trim() ===
                                    aluno.registration.trim())[0].studentMediaTests.toFixed(2) >= 50 ?
                                    <Indicator success={true} />
                                    : <Indicator success={false} />
                            }
                        </StudentData>

                    ))
                }
                <Modal center open={open} onClose={handleClose}>
                    <div>
                        <h2 id="simple-modal-title">{nome}</h2>
                        <p id="simple-modal-description">
                            {matricula}
                        </p>
                        <MenuChart viewChart={viewChart} name1={'Lista'} name2={'Assunto'}
                            name3={'Dificuldade'} name4={'Prediction'} />
                        {chart === 'Lista' ?
                            <Grafic registration={matricula}
                                json={performance} dataKeyX={dataKeyX} dataKeyBar={dataKeyBar}
                                fill={"#467fcf"} name={name} dataKeyBar1={type === 'lista' ? "mediaListClass" : "mediaTestClass"}
                                fill1={"#ff7300"} name1={"Média da turma"} />
                            : chart === 'Assunto' ? <Grafic registration={matricula}
                                json={bySubject} dataKeyX={"subject"} dataKeyBar={"mediaSubject"}
                                fill={"#467fcf"} name={"Média do aluno por assunto"}
                                dataKeyBar1={"mediaSubjectClass"}
                                fill1={"#ff7300"} name1={"Média da turma"} />
                                : <Grafic registration={matricula} json={byDifficulty}
                                    dataKeyX={"difficulty"}
                                    dataKeyBar={"mediaDifficulty"}
                                    name={"Média do aluno por nível de dificuldade"}
                                    fill={"#467fcf"} dataKeyBar1={"mediaDifficultyClass"}
                                    fill1={"#ff7300"} name1={"Média da turma"} />
                        }
                    </div>
                </Modal>
            </Body>
        </>
    )
}