import React, { useState } from 'react';

import { OptionsChart, Radios, Choice, Label, Select } from "./style";
import Check from '../Check/index';


export default props => {
    const [statistic, setStatistic] = useState(true)
    const [prediction, setPrediction] = useState(false)
    
    function alterChoice(i) {

        if (i == 1 && prediction){
            setStatistic(!statistic);
            setPrediction(!prediction);
        }
        if (i == 2 && statistic) {
            setStatistic(!statistic);
            setPrediction(!prediction);
        }

    }

    return (
        <OptionsChart>
            <Radios>
                <Choice onClick={() => alterChoice(1)}>
                    <Check state={statistic} />
                    <Label id="estatistica">
                        <Select onChange={e => props.viewChart(e.target.value)} >
                            <option value="1">Lista</option>
                            <option value="2">Assunto</option>
                            <option value="3">Dificuldade</option>
                        </Select>
                    </Label>
                </Choice>
                <Choice onClick={() => alterChoice(2)}>
                    <Check state={prediction} />
                    <Label id="previsao">Previsão</Label>
                </Choice>
            </Radios>

        </OptionsChart>
    )
}