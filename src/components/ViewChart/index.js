import React, { useState } from 'react';

import MenuChart from '../MenuChart/index';

//Charts
import Grafic from '../Grafic';
import {graph1} from '../../json/teste2.json';
import json2 from '../../json/df_featured_questions';
import json3 from '../../json/df_aprov_diff_7.json';
import Chart4 from '../Chart_04/index';

export default function App(props) {
    const [chart, setChart] = useState(1);

    function viewChart(value) {
        setChart(parseInt(value));
        
    }

    return (
        <>
            <MenuChart viewChart={viewChart} option1={'Lista'} option2={'Assunto'} option3={'Dificuldade'}/>
            {chart === 1 ?
                <Grafic data={graph1} dataKeyX={'list'}
                    dataKeyBar0={'more70'} fill0={'#82ca9d'}
                    nameBar0={'Bom Desempenho'} dataKeyBar1={'less70'}
                    fill1={'#F08080'} nameBar1={'Baixo Desempenho'} />


                : chart === 2 ?

                    <Grafic data={json2} dataKeyX={'assunto'}
                        dataKeyBar0={'altoRendimento'} fill0={'#82ca9d'}
                        nameBar0={'Alto Rendimento'} dataKeyBar1={'baixoRendimento'}
                        fill1={'#F08080'} nameBar1={'Baixo Rendimento'}
                        dataKeyBar2={'faltosos'} fill2={'#808080'} nameBar2={'Faltosos'} />
                    : chart === 3 ?

                        <Grafic data={json3} dataKeyX={'difficulty'}
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