import React, { useState } from 'react';

import MenuChart from '../MenuChart/index';

//Charts
import Grafic from '../Grafic';
import Chart4 from '../Chart_04/index';

export default function App({moreLess, dataKeyX, performance, byDifficulty, dataKeyBar0, nameBar0, dataKeyBar1, nameBar1, fill1, dataKeyBar2, nameBar2, fill2}) {
    const [chart, setChart] = useState('Lista');

    function viewChart(value) {
        setChart(value);
    }
    return (
        <>
            <MenuChart viewChart={viewChart} name1={'Lista'} name2={'Assunto'} name3={'Dificuldade'} name4={'Prediction'}/>
            {chart === 'Lista' ?
                <Grafic data={moreLess} dataKeyX={dataKeyX}
                    dataKeyBar0={'more'} fill0={'#82ca9d'}
                    nameBar0={'Bom Desempenho'} dataKeyBar1={'less'}
                    fill1={'#F08080'} nameBar1={'Baixo Desempenho'} 
                    dataKeyBar2={'missing'} fill2={'#808080'} nameBar2={'Faltosos'} />


                : chart === 'Assunto' ?

                    <Grafic data={performance} dataKeyX={'subject'}
                        dataKeyBar0={dataKeyBar0} fill0={'#82ca9d'}
                        nameBar0={nameBar0} dataKeyBar1={dataKeyBar1}
                        fill1={fill1} nameBar1={nameBar1}
                        dataKeyBar2={dataKeyBar2} fill2={fill2} nameBar2={nameBar2} />
                    : chart === 'Dificuldade' ?

                        <Grafic data={byDifficulty} dataKeyX={'difficulty'}
                            dataKeyBar0={'approved'} fill0={'#82ca9d'}
                            nameBar0={'Acima da média'} dataKeyBar1={'disapproved'}
                            fill1={'#F08080'} nameBar1={'Abaixo da média'}
                            dataKeyBar2={'missing'} fill2={'#808080'} nameBar2={'Faltosos'} />


                        :
                        <Chart4 />
            }
        </>
    );
}