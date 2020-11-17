import React, { useState } from 'react';

import MenuChart from '../MenuChart/index';

//Charts
import Grafic from '../Grafic';
import json1 from '../../json/df_less_more_70.json';
import json2 from '../../json/df_featured_questions';
import json3 from '../../json/df_aprov_diff_7.json';
import Chart4 from '../Chart_04/index';

export default props => {
    const [chart, setChart] = useState(1);

    function viewChart(value) {
        setChart(value)
    }

    if (chart == 1) {
        return (
            <>
                <MenuChart viewChart={viewChart} />
                <Grafic data={json1} dataKeyX={'list'} 
                dataKeyBar0={'more70'} fill0={'#82ca9d'}
                nameBar0={'Bom Desempenho'} dataKeyBar1={'less70'} 
                fill1={'#F08080'} nameBar1={'Baixo Desempenho'}/>
            </>
        )
    }
    if (chart == 2) {
        return (
            <>
                <MenuChart viewChart={viewChart} />
                <Grafic data={json2} dataKeyX={'assunto'} 
                dataKeyBar0={'altoRendimento'} fill0={'#82ca9d'}
                nameBar0={'Alto Rendimento'} dataKeyBar1={'baixoRendimento'} 
                fill1={'#F08080'} nameBar1={'Baixo Rendimento'}
                dataKeyBar2={'faltosos'} fill2={'#808080'} nameBar2 = {'Faltosos'} />
            </>
        )
    }
    if (chart == 3) {
        return (
            <>
                <MenuChart viewChart={viewChart} />
                <Grafic data={json3} dataKeyX={'difficulty'} 
                dataKeyBar0={'aprovados'} fill0={'#82ca9d'}
                nameBar0={'Aprovados'} dataKeyBar1={'reprovados'} 
                fill1={'#F08080'} nameBar1={'Reprovados'}
                dataKeyBar2={'faltosos'} fill2={'#808080'} nameBar2 = {'Faltosos'} />
            </>
        )
    }
    if (chart == 4) {
        return (
            <>
                <MenuChart viewChart={viewChart} />
                <Chart4 />
            </>
        )
    }
}