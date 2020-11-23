import React, { useState } from 'react';

import { OptionsChart, Radios, Choice, Label, Select } from "./style";
import Check from '../Check/index';


export default props => {
    const [statistic, setStatistic] = useState(true)
    const [prediction, setPrediction] = useState(false)
    
    function alterChoice(i) {

        if (i === 1 && prediction){
            setStatistic(!statistic);
            setPrediction(!prediction);
            props.viewChart(1)
        }
        if (i === 2 && statistic) {
            setStatistic(!statistic);
            setPrediction(!prediction);
            props.viewChart(4)
        }

    }

    return (
        <OptionsChart>
            <Radios>
                <Choice onClick={() => alterChoice(1)}>
                    <Check state={statistic} />
                    <Label id="estatistica">
                        <Select onChange={e => props.viewChart(e.target.value)} >
                            <option value={1}>{props.option1}</option>
                            <option value={2}>{props.option2}</option>
                            <option value={3}>{props.option3}</option>
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