import React, { useState } from 'react';

import Modal from './Modal';
import MenuChart from '../MenuChart';

import { Header, FilterInput, FilterSpace, FilterButton, FilterOptions, FilterOption } from './style';
import { Body, Div, StudentData, StudentImage, Data, Name, Note, Indicator } from './style';

import students from '../../json/df_student_practice_mean_performance_all_subjects.json';

import MediaPerLevel from '../Grafic/StudentGraficMediaPerLevel';
import Grafic from '../Grafic/StudentGrafic';
import json from '../../json/graph_performance_student_list_3.json';
import json2 from '../../json/df_student_practice_mean_performance_by_subject.json';

export default props => {
    const [alunos, setAlunos] = useState(students);
    const [open, setOpen] = useState(false);
    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [chart, setChart] = useState('Lista');

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
        setChart(1);
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
        if (param === "nome") {

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
        } else if (param === "nota") {
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
    const body = (
        <div>
            <h2 id="simple-modal-title">{nome}</h2>
            <p id="simple-modal-description">
                {matricula}
            </p>
            <MenuChart viewChart={viewChart} name1={'Lista'} name2={'Assunto'} name3={'Dificuldade'} name4={'Prediction'}/>
            {chart === 'Lista' ?
                <Grafic registration={matricula} 
                json={json} dataKeyX={"list"} dataKeyBar={"mediaList"} 
                fill={"#467fcf"} name={"Média da lista"} />
                : chart === 'Assunto' ? <Grafic registration={matricula} 
                json={json2} dataKeyX={"subject"} dataKeyBar={"meanSubject"} 
                fill={"#467fcf"} name={"Média por assunto"} />
                : <MediaPerLevel matricula={matricula} />
            }
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
                        <StudentData key={aluno.registration} onClick={() => handleOpen(aluno.user, aluno.registration)} >
                            <Div>
                                <StudentImage />
                                <Data>
                                    <Name>{aluno.user}</Name>
                                    <Name>Matricula: {aluno.registration}</Name>
                                    <Note>Média por listas: {aluno.meanAllSubjects.toFixed(2)}%</Note>
                                    <Note>Média por assuntos: {aluno.meanAllSubjects.toFixed(2)}%</Note>
                                    <Note>Média por dificuldade: {aluno.meanAllSubjects.toFixed(2)}%</Note>
                                </Data>
                            </Div>
                            {aluno.meanAllSubjects >= 50 ?
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