import React, { useState } from 'react';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import MenuChart from '../MenuChart';

import { Header, FilterInput, FilterSpace, FilterButton } from './style';
import { Body, Div, StudentData, StudentImage, Data, Name, Note, Indicator } from './style';

import Grafic from '../Grafic/StudentGrafic';

export default function App({ students, performance, bySubject, byDifficulty, 
    dataKeyX, dataKeyBar, name, type, media, mediaMean, mediaDifficulty, mediaAllMean, mediaAllDifficulty }) {
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
            setAlunos(students.filter(item => (item.user.includes(busca))));
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
                return b.meanAllSubjects - a.meanAllSubjects;
            })
            setAlunos(auxiliarAlunos);
        } else {
            auxiliarAlunos = [...alunos].sort(function (a, b) {
                return a.meanAllSubjects - b.meanAllSubjects;
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
                        <StudentData key={aluno.registration} onClick={() => handleOpen(aluno.user, aluno.registration)} >
                            <Div>
                                <StudentImage />
                                <Data>
                                    <Name>{aluno.user}</Name>
                                    <Name>Matricula: {aluno.registration}</Name>
                                    <Note>Média por {type}: {type==="lista" ? 
                                    media.filter(item=> item.registration.trim() === aluno.registration.trim())[0].medialist.toFixed(2) : 
                                    media.filter(item=> item.registration.trim() === aluno.registration.trim())[0].mediatest.toFixed(2)}%</Note>
                                    <Note>Média por assuntos: {mediaMean.filter(item=> item.registration.trim() === aluno.registration.trim())[0].meanAllSubjects.toFixed(2)}%</Note>
                                    <Note>Média por dificuldade: {mediaDifficulty.filter(item=> item.registration.trim() === aluno.registration.trim())[0].averageAllDifficulty.toFixed(2)}%</Note>
                                </Data>
                            </Div>
                            {type==="lista" ? 
                                    media.filter(item=> item.registration.trim() === aluno.registration.trim())[0].medialist.toFixed(2) >= 50 ?
                                    <Indicator success={true} />
                                    : <Indicator success={false} />
                                 : 
                                    media.filter(item=> item.registration.trim() === aluno.registration.trim())[0].mediatest.toFixed(2) >= 50 ?
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
                        <MenuChart viewChart={viewChart} name1={'Lista'} name2={'Assunto'} name3={'Dificuldade'} name4={'Prediction'} />
                        {chart === 'Lista' ?
                            <Grafic registration={matricula}
                                json={performance} dataKeyX={dataKeyX} dataKeyBar={dataKeyBar}
                                fill={"#467fcf"} name={name} />
                            : chart === 'Assunto' ? <Grafic registration={matricula}
                                json={bySubject} dataKeyX={"subject"} dataKeyBar={"studentMeanSubject"}
                                fill={"#467fcf"} name={"Média do aluno por assunto"} media={mediaAllMean}
                                dataKeyBar1={"classMeanSubject"} 
                                    fill1={"rgb(130, 202, 157)"} name1={"Média da turma"}/>
                                : <Grafic registration={matricula} json={byDifficulty} dataKeyX={"difficulty"}
                                    dataKeyBar={"averageDifficulty"} name={"Média do aluno por nível de dificuldade"} 
                                    fill={"#467fcf"} media={mediaAllDifficulty} dataKeyBar1={"classAverage"} 
                                    fill1={"rgb(130, 202, 157)"} name1={"Média da turma"} />
                        }
                    </div>
                </Modal>
            </Body>
        </>
    )
}