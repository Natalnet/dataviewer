import React, { useState } from 'react';
import { FormControl, FormControlLabel, RadioGroup, Radio, Checkbox } from '@material-ui/core';


export default function App(props) {
    const [selectedValue, setSelectedValue] = useState(props.name1);
    function handleChange(event) {
        setSelectedValue(event.target.value);
        props.viewChart(event.target.value);
    }
    return (
        <>
            <FormControl component="fieldset">
                <RadioGroup row aria-label="Gráficos" value={selectedValue} name="Gráficos" onChange={handleChange}>
                    <FormControlLabel value={props.name1} control={<Radio />} label={props.name1} />
                    <FormControlLabel value={props.name2} control={<Radio />} label={props.name2} />
                    <FormControlLabel value={props.name3} control={<Radio />} label={props.name3} />
                    <FormControlLabel className="checkbox" value={props.name4}
                        control={<Checkbox checked={selectedValue === props.name4} onChange={handleChange} name={props.name4} />}
                        label={props.name4}
                    />
                    {console.log(selectedValue===props.name4)}
                </RadioGroup>
            </FormControl>

        </>
    );
}