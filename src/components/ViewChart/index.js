import React, { useState } from 'react';

import MenuChart from '../MenuChart/index';

//Charts
import Grafic from '../Grafic';
import Chart4 from '../Chart_04/index';

export default function App({moreLess, dataKeyX, performance, byDifficulty}) {
    const [chart, setChart] = useState('Lista');

    function viewChart(value) {
        setChart(value);
    }
    console.log(moreLess);
    return (
        <>
            <MenuChart viewChart={viewChart} name1={'Lista'} name2={'Assunto'} name3={'Dificuldade'} name4={'Prediction'}/>
            {chart === 'Lista' ?
                <Grafic data={moreLess} dataKeyX={dataKeyX}
                    dataKeyBar0={'more'} fill0={'#82ca9d'}
                    nameBar0={'Bom Desempenho'} dataKeyBar1={'less'}
                    fill1={'#F08080'} nameBar1={'Baixo Desempenho'} />


                : chart === 'Assunto' ?

                    <Grafic data={performance} dataKeyX={'subject'}
                        dataKeyBar0={'highPerformance'} fill0={'#82ca9d'}
                        nameBar0={'Alto Rendimento'} dataKeyBar1={'lowPerformance'}
                        fill1={'#F08080'} nameBar1={'Baixo Rendimento'}
                        dataKeyBar2={'faltosos'} fill2={'#808080'} nameBar2={'Faltosos'} />
                    : chart === 'Dificuldade' ?

                        <Grafic data={byDifficulty} dataKeyX={'difficulty'}
                            dataKeyBar0={'aprovados'} fill0={'#82ca9d'}
                            nameBar0={'Aprovados'} dataKeyBar1={'reprovados'}
                            fill1={'#F08080'} nameBar1={'Reprovados'}
                            dataKeyBar2={'faltosos'} fill2={'#808080'} nameBar2={'Faltosos'} />


                        :
                        <Chart4 />
            }
        </>
    );
}