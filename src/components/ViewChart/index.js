import React, { useState } from 'react';

import MenuChart from '../MenuChart/index';

//Charts
import Chart1 from '../Chart_01/index';
import Chart2 from '../Chart_02/index';

export default props => {
    const [chart, setChart] = useState(1);

    function viewChart(value) {
        setChart(value)
    }

    if (chart == 1) {
        return (
            <>
                <MenuChart viewChart={viewChart} />
                <Chart1 />
            </>
        )
    }
    if (chart == 2) {
        return (
            <>
                <MenuChart viewChart={viewChart} />
                <Chart2 />
            </>
        )
    }
    if (chart == 3) {
        return (
            <>
                <MenuChart viewChart={viewChart} />
                <h1> TESTEaaaaaaaaa </h1>
            </>
        )
    }
}